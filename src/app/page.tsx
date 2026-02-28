"use client";

import { useEffect, useRef, useState } from "react";

import DaysCounter from "@/src/components/DaysCounter";
import FlowerBackground from "@/src/components/FlowerBackground";
import GallerySection from "@/src/components/GallerySection";
import PasswordGate from "@/src/components/PasswordGate";
import ReasonCard from "@/src/components/ReasonCard";

const SECRET = "flowerpower";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HomePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(`${BASE_PATH}/music.mp3`);
    audio.volume = 0.2;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blush via-cream to-rose-50 text-slate">
      <FlowerBackground />

      {!unlocked ? (
        <PasswordGate secret={SECRET} onUnlock={() => setUnlocked(true)} />
      ) : (
        <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-10 md:gap-10 md:px-10">
          <header className="rounded-[3rem] bg-white/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl md:p-10">
            <h1 className="text-center text-4xl font-semibold text-slate md:text-6xl">
              Blooming Reasons I Love You
            </h1>
            <DaysCounter />
          </header>

          <ReasonCard />
          <GallerySection />

          <footer className="pb-10 pt-2 text-center text-base text-slate-soft md:text-lg">
            Made with chaos and flowers 🌸
          </footer>

          <button
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-20 rounded-full bg-white/90 px-5 py-4 text-xl text-slate shadow-xl shadow-slate-900/10 transition duration-300 ease-in-out hover:scale-110"
            aria-label="Toggle background music"
          >
            {playing ? "🎵 Pause Music" : "🎵 Play Music"}
          </button>
        </section>
      )}
    </main>
  );
}
