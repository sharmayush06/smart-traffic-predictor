"use client";

export default function StatsCards() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <div className="border border-cyan-500 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-cyan-400">23%</h2>
          <p>Faster Commutes</p>
        </div>

        <div className="border border-cyan-500 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-cyan-400">1.2M</h2>
          <p>Vehicles Optimized</p>
        </div>

        <div className="border border-cyan-500 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-cyan-400">340t</h2>
          <p>CO₂ Saved</p>
        </div>

        <div className="border border-cyan-500 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-cyan-400">15 min</h2>
          <p>Alert Time</p>
        </div>
      </div>
    </section>
  );
}