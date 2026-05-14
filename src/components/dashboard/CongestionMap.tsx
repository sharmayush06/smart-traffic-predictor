"use client";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TrafficPoint } from "@/lib/types";

const severityToColor = (level: string) => {
  switch (level) {
    case "low": return "#10b981";
    case "medium": return "#f59e0b";
    case "high": return "#f97316";
    case "critical": return "#ef4444";
    default: return "#6b7280";
  }
};

export default function CongestionMap({ points }: { points: TrafficPoint[] }) {
  const center: [number, number] = [28.6139, 77.2090];
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden glass border border-white/10">
      <MapContainer center={center} zoom={13} className="h-full w-full" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {points.map((point) => (
          <CircleMarker
            key={point.id}
            center={[point.lat, point.lng]}
            radius={12 + point.vehicleCount / 10}
            pathOptions={{ color: severityToColor(point.congestionLevel), fillOpacity: 0.6 }}
          >
            <Popup>
              <div className="text-black text-sm">
                <strong>{point.congestionLevel.toUpperCase()}</strong>
                <br />Speed: {point.speed} km/h
                <br />Vehicles: {point.vehicleCount}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
