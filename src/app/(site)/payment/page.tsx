"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "N/A";
  const email = searchParams.get("email") || "N/A";

  
  const transactionId = "TXN123456789";
  const amount = "PKR 99.99";
  const date = new Date().toLocaleDateString();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Payment Receipt
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Name:</strong> {name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {email}
          </p>

          {/* Payment Slip */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Payment Details</h3>
            <p className="text-gray-700">
              <strong>Transaction ID:</strong> {transactionId}
            </p>
            <p className="text-gray-700">
              <strong>Amount Paid:</strong> {amount}
            </p>
            <p className="text-gray-700">
              <strong>Date:</strong> {date}
            </p>
          </div>

          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
