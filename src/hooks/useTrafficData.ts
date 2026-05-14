import { useState, useEffect } from "react";
import { TrafficPoint, Prediction, Alert } from "@/lib/types";
import { fetchTrafficData, fetchPredictions } from "@/lib/api/prediction";
import { liveAlerts } from "@/lib/data/alerts";

export function useTrafficData() {
  const [traffic, setTraffic] = useState<TrafficPoint[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [t, p] = await Promise.all([fetchTrafficData(), fetchPredictions()]);
        setTraffic(t);
        setPredictions(p);
        setAlerts(liveAlerts);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  return { traffic, predictions, alerts, loading };
}
