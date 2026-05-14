import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const severityColor = (level: string) => {
  switch (level) {
    case "low": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    case "medium": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "high": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    case "critical": return "bg-red-500/20 text-red-300 border-red-500/30";
    default: return "bg-gray-500/20 text-gray-300";
  }
};

export const formatTime = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};
