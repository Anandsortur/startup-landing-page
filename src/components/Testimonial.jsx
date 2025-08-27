"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-gray-600 mb-6">
              "This platform has completely transformed how we manage our
              events. It’s simple, fast, and super reliable!"
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/media/user1.webp"
                alt="User"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Ananya Sharma</h4>
                <span className="text-sm text-gray-500">
                  Student Coordinator
                </span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-600 mb-6">
              "The resource booking feature is a game changer. Scheduling is now
              so smooth and transparent."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/media/user2.webp"
                alt="User"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Rahul Verma</h4>
                <span className="text-sm text-gray-500">Event Manager</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-gray-600 mb-6">
              "I love how easy it is to register for events now. Everything
              feels modern and efficient."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/media/user3.webp"
                alt="User"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">David Nair</h4>
                <span className="text-sm text-gray-500">Club Member</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
