import { TrafficPoint, Prediction } from "../types";

export const trafficPoints: TrafficPoint[] = [
  { id: "1", lat: 28.6139, lng: 77.2090, congestionLevel: "high", speed: 25, vehicleCount: 120, timestamp: new Date().toISOString() },
  { id: "2", lat: 28.6200, lng: 77.2100, congestionLevel: "critical", speed: 10, vehicleCount: 200, timestamp: new Date().toISOString() },
  { id: "3", lat: 28.6120, lng: 77.2150, congestionLevel: "medium", speed: 45, vehicleCount: 80, timestamp: new Date().toISOString() },
  { id: "4", lat: 28.6250, lng: 77.2050, congestionLevel: "low", speed: 60, vehicleCount: 40, timestamp: new Date().toISOString() },
  { id: "5", lat: 28.6300, lng: 77.2200, congestionLevel: "high", speed: 30, vehicleCount: 150, timestamp: new Date().toISOString() },
];

export const predictions: Prediction[] = [
  { zoneId: "Z1", locationName: "Connaught Place", predictedLevel: "high", confidence: 87, timeWindow: "30-60 min", lat: 28.6328, lng: 77.2197 },
  { zoneId: "Z2", locationName: "India Gate", predictedLevel: "critical", confidence: 93, timeWindow: "15-45 min", lat: 28.6129, lng: 77.2295 },
  { zoneId: "Z3", locationName: "Hauz Khas", predictedLevel: "medium", confidence: 76, timeWindow: "45-75 min", lat: 28.5494, lng: 77.2001 },
];
