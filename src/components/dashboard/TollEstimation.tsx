import { tollPlazas } from "@/lib/data/tolls";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";

export default function TollEstimation() {
  const total = tollPlazas.reduce((sum, t) => sum + t.fee, 0);
  return (
    <Card className="glass border-white/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold neon-text mb-4 flex items-center gap-2">
          <IndianRupee className="h-5 w-5" /> Toll Estimation (FASTag)
        </h3>
        <div className="space-y-3">
          {tollPlazas.map((toll) => (
            <div key={toll.plazaName} className="flex justify-between text-sm">
              <span>{toll.plazaName}</span>
              <span className="flex items-center gap-2">
                ₹{toll.fee}
                {toll.acceptsFastag && <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">FASTag</Badge>}
              </span>
            </div>
          ))}
          <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
