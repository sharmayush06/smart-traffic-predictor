import HeroSection from "@/components/landing/HeroSection";
import StatsCards from "@/components/landing/StatsCards";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import DashboardPreview from "@/components/landing/DashboardPreview";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <StatsCards />
      <FeaturesGrid />
      <DashboardPreview />
    </main>
  );
}