"use client";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Event Management",
      description:
        "Easily create, update, and manage campus events with a user-friendly interface.",
      icon: "🎉",
    },
    {
      title: "Club Collaboration",
      description:
        "Streamline communication and collaboration among clubs and members.",
      icon: "🤝",
    },
    {
      title: "Smart Attendance",
      description:
        "AI-powered smart attendance tracking with QR codes and real-time updates.",
      icon: "📊",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track participation, engagement, and event success with visual insights.",
      icon: "📈",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-40 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Powerful Features for Smarter Campus Management
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Explore the tools designed to simplify your campus life, from event
          planning to AI-powered attendance tracking.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-lg duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
