"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

export default function EmissionMetrics() {
  return (
    <Card className="glass border-white/5">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Leaf className="h-5 w-5 text-neon-green" /> Emission Reduction
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <span className="text-muted-foreground">Today</span>
          <p className="text-2xl font-bold text-neon-green">240 kg</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground">This Week</span>
          <p className="text-2xl font-bold text-neon-green">1.6 t</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground">Optimised Trips</span>
          <p className="text-2xl font-bold text-white">1,245</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground">Trees Equivalent</span>
          <p className="text-2xl font-bold text-white">82</p>
        </div>
      </CardContent>
    </Card>
  );
}
