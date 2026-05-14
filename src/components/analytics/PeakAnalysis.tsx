"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const peakData = [
  { zone: "CP", peak: 92 },
  { zone: "India Gate", peak: 88 },
  { zone: "Hauz Khas", peak: 74 },
  { zone: "DND", peak: 65 },
];

export default function PeakAnalysis() {
  return (
    <Card className="glass border-white/5">
      <CardHeader>
        <CardTitle className="text-white">Peak Congestion by Zone</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={peakData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="zone" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip cursor={{ fill: "#ffffff10" }} />
              <Bar dataKey="peak" fill="#39ff14" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
