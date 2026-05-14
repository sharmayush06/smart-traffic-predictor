import { Route } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, severityColor, formatTime } from "@/lib/utils";
import { Clock, Fuel, Banknote, Leaf } from "lucide-react";

interface RouteCardProps {
  route: Route;
  selected?: boolean;
  onSelect: () => void;
}

export default function RouteCard({ route, selected, onSelect }: RouteCardProps) {
  return (
    <Card
      className={cn(
        "glass cursor-pointer transition-all hover:border-neon-blue/50",
        selected && "ring-2 ring-neon-blue neon-border"
      )}
      onClick={onSelect}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-white">{route.name}</span>
          <Badge className={severityColor(route.trafficLevel)}>{route.trafficLevel}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {formatTime(route.eta)}</div>
          <div className="flex items-center gap-1"><Fuel className="h-4 w-4" /> ₹{route.fuelCost}</div>
          <div className="flex items-center gap-1"><Banknote className="h-4 w-4" /> Toll ₹{route.tollFee}</div>
          <div className="flex items-center gap-1"><Leaf className="h-4 w-4" /> {route.emissionSaved}g CO₂</div>
        </div>
      </CardContent>
    </Card>
  );
}
