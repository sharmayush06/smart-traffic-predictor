"use client";
import { useTrafficData } from "@/hooks/useTrafficData";
import dynamic from "next/dynamic";
import RouteRecommendation from "@/components/dashboard/RouteRecommendation";
import TollEstimation from "@/components/dashboard/TollEstimation";
import EmergencyPanel from "@/components/dashboard/EmergencyPanel";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import ChatAssistant from "@/components/dashboard/ChatAssistant";
import { Skeleton } from "@/components/ui/skeleton";

const CongestionMap = dynamic(() => import("@/components/dashboard/CongestionMap"), { ssr: false });

export default function DashboardPage() {
  const { traffic, loading } = useTrafficData();

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-6">
      <h1 className="text-3xl font-bold neon-text">Traffic Command Centre</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {loading ? (
            <Skeleton className="h-[500px] w-full rounded-2xl" />
          ) : (
            <CongestionMap points={traffic} />
          )}
          <RouteRecommendation />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TollEstimation />
            <EmergencyPanel />
          </div>
        </div>
        <div className="space-y-6">
          <AlertsPanel />
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}
