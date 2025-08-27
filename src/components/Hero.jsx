"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setShowVideo(e.matches);
    setShowVideo(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  };

  const bounceArrow = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Media: video on desktop, image on mobile */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onCanPlayThrough={() => setLoaded(true)}
          >
            <source src="/media/hero1.webm" type="video/webm" />
            <source src="/media/hero1.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/media/hero-poster1.png"
            alt="Campus collaboration background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onLoadingComplete={() => setLoaded(true)}
          />
        )}

        {/* Overlay  */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl text-white">
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-indigo-300 font-medium mb-5 drop-shadow-md"
        >
          🚀 Empowering Campus Life
        </motion.p>

        <motion.h1
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          Campus Club & Event Manager
        </motion.h1>

        <motion.p
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto drop-shadow-md"
        >
          A smart platform to manage campus events, streamline club activities,
          and enable AI-powered smart attendance tracking.
        </motion.p>

        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#features"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 focus:outline-none transition"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          variants={bounceArrow}
          animate="animate"
          className="mt-12 text-white/100 text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </header>
  );
}
