"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function PaymentPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // Handle payment method
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  // Fake Payment Processing
  const handlePayment = () => {
    alert(`Payment successful with ${paymentMethod.toUpperCase()}!`);
    router.push("/success");
  };

  // Generate & Download Invoice
  const handleDownloadInvoice = async () => {
    const invoiceData = `
      Invoice No: #123456
      Name: John Doe
      Email: johndoe@example.com
      Payment Method: ${paymentMethod.toUpperCase()}
      Amount: $99.99
      Status: Paid
    `;
  
    const blob = new Blob([invoiceData], { type: "text/plain;charset=utf-8" });
  
    // Dynamically import file-saver
    const fileSaver = await import("file-saver");
    fileSaver.saveAs(blob, "Invoice.txt");
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Complete Your Payment 💳
        </h2>

        {/* Payment Methods */}
        <div className="space-y-4">
          <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="credit_card"
              checked={paymentMethod === "credit_card"}
              onChange={handlePaymentMethodChange}
            />
            <span className="font-medium">Credit Card</span>
          </label>

          <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
            <span className="font-medium">PayPal</span>
          </label>

          <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="crypto"
              checked={paymentMethod === "crypto"}
              onChange={handlePaymentMethodChange}
            />
            <span className="font-medium">Cryptocurrency</span>
          </label>
        </div>

        {/* Pay Now Button */}
        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Pay Now
        </button>

        {/* Download Invoice Button */}
        <button
          onClick={handleDownloadInvoice}
          className="w-full mt-3 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Download Invoice 📄
        </button>
      </div>
    </div>
  );
}
