"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role: User

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder authentication logic (replace with actual authentication)
    if (email === "admin@example.com" && password === "admin123") {
      router.push("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      router.push("/member-dashboard"); // Redirect to Member/User Dashboard
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/images/2.jpg"
        alt="Background"
        fill
        className="object-cover opacity-50"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Sign In to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Sign in
          </button>

          {/* Register Button */}
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
          >
            <a href="register">Register</a>
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <img src="/microsoft-icon.svg" alt="Microsoft" className="h-5 w-5 mr-2" />
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
