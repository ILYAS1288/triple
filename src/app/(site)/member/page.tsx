"use client";

import React from "react";

const MemberPage = () => {

  const user = {
    name: "Muhammad Raiz",
    email: "MuhammadRaiz@example.com",
    memberSince: "2023-06-15",
    membershipType: "Standard",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Member Profile
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Name:</strong> {user.name}
          </p>
          
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700">
            <strong>Member Since:</strong> {new Date(user.memberSince).toDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Membership:</strong> {user.membershipType}
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Upgrade Membership
          </button>
        </div>
      </div>


       <div className="w-full max-w-md ml-5  p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Member Profile
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Name:</strong> {user.name}
          </p>
          
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700">
            <strong>Member Since:</strong> {new Date(user.memberSince).toDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Membership:</strong> {user.membershipType}
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Upgrade Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
