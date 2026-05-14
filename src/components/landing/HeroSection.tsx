"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-cyan-400">AI-Powered</span>
          <br />
          Smart Traffic Predictor
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Predict traffic congestion, optimize routes, and improve smart city transportation.
        </p>
      </motion.div>
    </section>
  );
}