export type Severity = 'low' | 'medium' | 'high' | 'critical';

export interface TrafficPoint {
  id: string;
  lat: number;
  lng: number;
  congestionLevel: Severity;
  speed: number;
  vehicleCount: number;
  timestamp: string;
}

export interface Route {
  id: string;
  name: string;
  type: 'fastest' | 'cheapest' | 'ai-suggested';
  polyline: [number, number][];
  eta: number;
  distance: number;
  tollFee: number;
  fuelCost: number;
  trafficLevel: Severity;
  emissionSaved: number;
}

export interface TollInfo {
  plazaName: string;
  location: [number, number];
  fee: number;
  acceptsFastag: boolean;
}

export interface Alert {
  id: string;
  type: 'accident' | 'weather' | 'event' | 'congestion';
  title: string;
  description: string;
  location: [number, number];
  severity: Severity;
  timestamp: string;
}

export interface Prediction {
  zoneId: string;
  locationName: string;
  predictedLevel: Severity;
  confidence: number;
  timeWindow: string;
  lat: number;
  lng: number;
}

export interface EmergencyVehicle {
  id: string;
  type: 'ambulance' | 'fire' | 'police';
  currentRoute: [number, number][];
  etaToDestination: number;
  signalPriorityActive: boolean;
}
