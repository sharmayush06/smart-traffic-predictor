"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 bg-black text-white">
      <h1 className="text-2xl font-bold text-cyan-400">
        Smart Traffic AI
      </h1>

      <div className="flex gap-6">
        <Link
          href="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="hover:text-cyan-400 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/analytics"
          className="hover:text-cyan-400 transition"
        >
          Analytics
        </Link>
      </div>
    </nav>
  );
}