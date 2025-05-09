import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { connectToDatabase } from "@/lib/mongodb";
import { rateLimit } from "@/lib/rateLimit";

// Rate limiting configuration
const loginRateLimit = rateLimit(5, 15 * 60 * 1000); // 5 requests per 15 minutes

export async function POST(req: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await loginRateLimit(req);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString()
          }
        }
      );
    }

    const { email, password } = await req.json();

    // Input validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { error: "Invalid input types" },
        { status: 400 }
      );
    }

    // Connect to database with error handling
    let db;
    try {
      const connection = await connectToDatabase();
      db = connection.db;
    } catch (error) {
      console.error("Database connection error:", error);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    // Find user with error handling
    let user;
    try {
      user = await db.collection("users").findOne({ email });
    } catch (error) {
      console.error("Database query error:", error);
      return NextResponse.json(
        { error: "Error finding user" },
        { status: 500 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare passwords with error handling
    let isMatch;
    try {
      isMatch = await bcrypt.compare(password, user.hashedPassword);
    } catch (error) {
      console.error("Password comparison error:", error);
      return NextResponse.json(
        { error: "Error verifying password" },
        { status: 500 }
      );
    }

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT token with error handling
    let token;
    try {
      token = sign(
        { 
          userId: user._id,
          email: user.email,
          role: user.role 
        },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "1d" }
      );
    } catch (error) {
      console.error("Token creation error:", error);
      return NextResponse.json(
        { error: "Error creating authentication token" },
        { status: 500 }
      );
    }

    // Create response with user data and set cookie
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          email: user.email,
          role: user.role,
          name: user.name
        }
      },
      {
        headers: {
          'Set-Cookie': `auth-token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict${
            process.env.NODE_ENV === 'production' ? '; Secure' : ''
          }`
        }
      }
    );

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 