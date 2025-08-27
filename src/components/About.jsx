"use client";
import { motion } from "framer-motion";

export default function About() {
  const leftVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Mission */}
      <section id="about" className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to simplify campus club and event management,
              bringing students and organizers together on one seamless
              platform.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <img
              src="/media/about.webp"
              alt="Mission illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <img
              src="/media/vision.webp"
              alt="Vision illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision smarter campuses where technology enhances
              participation, streamlines communication, and builds stronger
              communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              We believe in inclusivity, transparency, and innovation—ensuring
              every student has equal access to opportunities and resources.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <img
              src="/media/values.webp"
              alt="Values illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <img
              src="/media/impact.webp"
              alt="Impact illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600">
              From boosting event participation to fostering leadership, our
              platform empowers students and creates a lasting positive impact
              on campus life.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
