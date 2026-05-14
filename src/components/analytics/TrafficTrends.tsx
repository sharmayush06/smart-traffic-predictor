"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { time: "6AM", congestion: 30 },
  { time: "8AM", congestion: 85 },
  { time: "10AM", congestion: 60 },
  { time: "12PM", congestion: 45 },
  { time: "2PM", congestion: 55 },
  { time: "4PM", congestion: 70 },
  { time: "6PM", congestion: 95 },
  { time: "8PM", congestion: 65 },
];

export default function TrafficTrends() {
  return (
    <Card className="glass border-white/5">
      <CardHeader>
        <CardTitle className="text-white">Daily Congestion Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "8px" }} />
              <Line type="monotone" dataKey="congestion" stroke="#00f0ff" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
