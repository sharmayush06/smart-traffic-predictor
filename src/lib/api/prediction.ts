import { predictions, trafficPoints } from "../data/trafficData";
import { Prediction, TrafficPoint } from "../types";

export async function fetchTrafficData(): Promise<TrafficPoint[]> {
  await new Promise((res) => setTimeout(res, 800));
  return trafficPoints;
}

export async function fetchPredictions(): Promise<Prediction[]> {
  await new Promise((res) => setTimeout(res, 600));
  return predictions.map(p => ({
    ...p,
    confidence: Math.min(99, p.confidence + Math.floor(Math.random() * 5)),
  }));
}

export async function getRecommendedRoute(): Promise<string> {
  return "r3";
}
