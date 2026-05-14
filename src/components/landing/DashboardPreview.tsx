"use client";
import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl overflow-hidden border border-white/10"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <p className="text-muted-foreground text-lg">[ Interactive Dashboard Preview ]</p>
        </div>
        <div className="p-6 text-center text-muted-foreground text-sm">
          Real-time congestion heatmap, route comparisons, and AI assistant.
        </div>
      </motion.div>
    </section>
  );
}
