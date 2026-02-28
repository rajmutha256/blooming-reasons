"use client";

import { useState } from "react";

import { reasons } from "@/src/data/reasons";

export default function ReasonCard() {
  const [reason, setReason] = useState(reasons[0]);
  const [tick, setTick] = useState(0);

  const handleReason = () => {
    let nextReason = reason;

    while (nextReason === reason && reasons.length > 1) {
      nextReason = reasons[Math.floor(Math.random() * reasons.length)];
    }

    setReason(nextReason);
    setTick((previous) => previous + 1);
  };

  return (
    <section className="rounded-[3rem] bg-white/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-slate">Blooming Reasons I Love You 🌸</h2>

      <p key={tick} className="animate-reveal mt-5 text-center text-lg text-slate-soft md:text-xl">
        {reason}
      </p>

      <div className="mt-7 flex justify-center">
        <button
          onClick={handleReason}
          className="rounded-full bg-gradient-to-r from-pink-200 to-rose-200 px-7 py-3 text-lg font-medium text-slate shadow-lg shadow-pink-200/50 transition duration-300 ease-in-out hover:scale-105"
        >
          Give Me a Reason
        </button>
      </div>
    </section>
  );
}
