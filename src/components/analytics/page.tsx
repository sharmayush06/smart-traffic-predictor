"use client";

import dynamic from "next/dynamic";

const TrafficTrends = dynamic(
  () => import("@/components/analytics/TrafficTrends"),
  { ssr: false }
);

const PeakAnalysis = dynamic(
  () => import("@/components/analytics/PeakAnalysis"),
  { ssr: false }
);

const EmissionMetrics = dynamic(
  () => import("@/components/analytics/EmissionMetrics"),
  { ssr: false }
);

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-cyan-400">
        Analytics & Insights
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficTrends />
        <PeakAnalysis />
      </div>

      <EmissionMetrics />
    </div>
  );
}