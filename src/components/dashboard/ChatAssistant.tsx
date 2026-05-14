"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot } from "lucide-react";

const mockResponses: Record<string, string> = {
  traffic: "Current congestion is moderate on NH-24. Expected to clear in 20 minutes.",
  route: "The AI suggested route via DND saves 15 minutes and ₹30 toll.",
  toll: "Total toll for this journey is ₹80 (2 plazas). FASTag accepted at both.",
};

export default function ChatAssistant() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "assistant", text: "Hi! Ask me about traffic, routes, or tolls." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    let reply = "I can help with traffic updates, route suggestions, and toll info.";
    if (userMsg.toLowerCase().includes("traffic")) reply = mockResponses.traffic;
    else if (userMsg.toLowerCase().includes("route")) reply = mockResponses.route;
    else if (userMsg.toLowerCase().includes("toll")) reply = mockResponses.toll;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    }, 500);
  };

  return (
    <Card className="glass border-white/5 flex flex-col h-[400px]">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="h-5 w-5 text-neon-green" />
          <span className="font-semibold neon-text">Traffic AI</span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 mb-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm p-2 rounded-lg max-w-[85%] ${
                msg.role === "user" ? "bg-neon-blue/10 ml-auto" : "bg-white/5"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Ask about traffic..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="bg-white/5 border-white/10 text-sm"
          />
          <Button size="icon" onClick={handleSend} className="bg-neon-blue text-black hover:bg-neon-blue/80">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
