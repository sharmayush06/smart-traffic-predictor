"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Route, Banknote, Ambulance, BellRing, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { icon: BrainCircuit, title: "AI Prediction", desc: "30–60 min congestion forecasts" },
  { icon: Route, title: "Smart Routing", desc: "Fastest, cheapest & AI suggested paths" },
  { icon: Banknote, title: "Toll Estimation", desc: "FASTag compatible dynamic fees" },
  { icon: Ambulance, title: "Emergency Priority", desc: "Signal preemption for ambulances" },
  { icon: BellRing, title: "Live Alerts", desc: "Accident, weather & event updates" },
  { icon: MessageSquare, title: "Chat Assistant", desc: "Traffic queries answered instantly" },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 neon-text">Core Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-white/5 hover:border-neon-green/30 transition-colors h-full">
              <CardHeader>
                <f.icon className="h-10 w-10 text-neon-green mb-2" />
                <CardTitle className="text-white">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
