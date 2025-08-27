import React from "react";
import Link from "next/link";
export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Simplify Campus Events?
          </h2>
          <p className="text-lg mb-8">
            Join clubs, book resources, and manage events effortlessly with our
            platform.
          </p>
          <Link href="/get-started">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
