"use client";
import { useState } from "react";
import { alternativeRoutes } from "@/lib/data/routes";
import RouteCard from "./RouteCard";
import { motion } from "framer-motion";

export default function RouteRecommendation() {
  const [selected, setSelected] = useState("r3");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h3 className="text-xl font-semibold neon-text">Route Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alternativeRoutes.map((route) => (
          <RouteCard
            key={route.id}
            route={route}
            selected={selected === route.id}
            onSelect={() => setSelected(route.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}
