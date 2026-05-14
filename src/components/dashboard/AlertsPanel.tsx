"use client";
import { useTrafficData } from "@/hooks/useTrafficData";
import { AlertTriangle, CloudRain, CalendarX, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: any = {
  accident: AlertTriangle,
  weather: CloudRain,
  event: CalendarX,
  congestion: Car,
};

export default function AlertsPanel() {
  const { alerts, loading } = useTrafficData();
  if (loading)
    return (
      <Card className="glass border-white/5">
        <CardContent className="p-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-14 bg-white/5 rounded animate-pulse" />
          ))}
        </CardContent>
      </Card>
    );
  return (
    <Card className="glass border-white/5 overflow-hidden">
      <CardContent className="p-4 max-h-80 overflow-y-auto space-y-3">
        <h3 className="text-lg font-semibold neon-text">Live Alerts</h3>
        <AnimatePresence>
          {alerts.map((alert) => {
            const Icon = iconMap[alert.type] || AlertTriangle;
            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
              >
                <Icon className="h-5 w-5 text-neon-blue mt-0.5" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">{alert.title}</span>
                    <Badge className="capitalize text-xs">{alert.severity}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
