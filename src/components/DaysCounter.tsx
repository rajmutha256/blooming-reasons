"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2022-04-28T00:00:00");
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const getDaysSince = () => {
  const today = new Date();

  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const startUtc = Date.UTC(
    START_DATE.getFullYear(),
    START_DATE.getMonth(),
    START_DATE.getDate()
  );

  return Math.floor((todayUtc - startUtc) / MS_PER_DAY);
};

export default function DaysCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    setDays(getDaysSince());

    const timer = window.setInterval(() => {
      setDays(getDaysSince());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className="mt-4 text-center text-xl text-slate md:text-2xl">
      🌼 Days Since You Made My Life Better: {days}
    </p>
  );
}
