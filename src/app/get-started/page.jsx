"use client";
import React from "react";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🚀 Coming soon</h1>
      <p className="text-lg text-gray-700 mb-6">
        Something exciting is on the way. Stay tuned for updates!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
