import TrafficTrends from "@/components/analytics/TrafficTrends";
import PeakAnalysis from "@/components/analytics/PeakAnalysis";
import EmissionMetrics from "@/components/analytics/EmissionMetrics";

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold neon-text">Analytics & Insights</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficTrends />
        <PeakAnalysis />
      </div>
      <EmissionMetrics />
    </div>
  );
}
