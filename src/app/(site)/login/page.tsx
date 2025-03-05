"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/page/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    // Redirect based on role
    if (data.role === "admin") {
      router.push("/");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <Image src="/images/2.jpg" alt="Background" fill className="object-cover opacity-50" priority />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Sign In</h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-2" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-2" required />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Sign in</button>
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
          >
            <a href="register">Register</a>
          </button>
        </form>
      </div>
    </div>
  );
}
