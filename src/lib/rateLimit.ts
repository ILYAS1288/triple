import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store for rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(limit: number, windowMs: number) {
  return async (req: NextRequest) => {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowStart = now - windowMs;

    // Get or initialize rate limit data for this IP
    const rateLimitData = rateLimitStore.get(ip) || { count: 0, resetTime: now + windowMs };

    // Reset count if window has passed
    if (now > rateLimitData.resetTime) {
      rateLimitData.count = 0;
      rateLimitData.resetTime = now + windowMs;
    }

    // Increment count
    rateLimitData.count++;
    rateLimitStore.set(ip, rateLimitData);

    // Check if limit is exceeded
    if (rateLimitData.count > limit) {
      return {
        success: false,
        limit,
        remaining: 0,
        reset: rateLimitData.resetTime
      };
    }

    return {
      success: true,
      limit,
      remaining: limit - rateLimitData.count,
      reset: rateLimitData.resetTime
    };
  };
} 