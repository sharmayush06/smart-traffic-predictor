import { Alert } from "../types";

export const liveAlerts: Alert[] = [
  {
    id: "a1",
    type: "accident",
    title: "Multi-vehicle collision",
    description: "3 vehicles involved near ITO, left lane blocked.",
    location: [28.6270, 77.2380],
    severity: "critical",
    timestamp: new Date().toISOString(),
  },
  {
    id: "a2",
    type: "weather",
    title: "Heavy rainfall expected",
    description: "Visibility reduced, slippery roads. Drive carefully.",
    location: [28.6139, 77.2090],
    severity: "high",
    timestamp: new Date().toISOString(),
  },
  {
    id: "a3",
    type: "event",
    title: "Marathon near India Gate",
    description: "Roads closed until 10 AM. Use alternate routes.",
    location: [28.6129, 77.2295],
    severity: "medium",
    timestamp: new Date().toISOString(),
  },
];
