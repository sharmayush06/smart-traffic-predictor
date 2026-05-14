import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import './globals.css';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Smart Traffic Predictor",
  description: "Hackathon-ready traffic prediction for smart cities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
  <Navbar />
  {children}
</ThemeProvider>
      </body>
    </html>
  );
}
