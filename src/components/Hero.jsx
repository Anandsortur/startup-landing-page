"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setShowVideo(e.matches);
    setShowVideo(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

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
            poster="/media/hero-poster.webp"
          >
            <source src="/media/hero1.webm" type="video/webm" />
            <source src="/media/hero1.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/media/hero-poster1.png"
            alt="Abstract campus collaboration background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <p className="text-indigo-300 font-medium mb-3">
          🚀 Empowering Campus Life
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Campus Club & Event Manager
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          A smart platform to manage campus events, streamline club activities,
          and enable AI-powered smart attendance tracking.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#features"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            aria-label="Get started with Campus Club Manager"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
            aria-label="Learn more about our mission"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12 text-white/80 animate-bounce">↓</div>
      </div>
    </header>
  );
}
