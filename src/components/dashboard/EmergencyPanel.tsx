import { Card, CardContent } from "@/components/ui/card";
import { Ambulance, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const emergencyVehicle = {
  type: "ambulance",
  eta: 4,
  signalPriorityActive: true,
};

export default function EmergencyPanel() {
  return (
    <Card className="glass border-red-500/20 bg-red-500/5">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-red-300">
          <Ambulance className="h-5 w-5" /> <span className="font-semibold">Emergency Vehicle Priority</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">ETA to Hospital</span>
          <span className="font-mono text-neon-green">{emergencyVehicle.eta} min</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-yellow-400" />
          <span className="text-sm">Traffic signals preempted along route</span>
        </div>
        <Badge className="bg-neon-green/20 text-neon-green">Priority Active</Badge>
      </CardContent>
    </Card>
  );
}
