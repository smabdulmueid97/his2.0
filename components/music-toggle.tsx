"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

type MusicToggleProps = {
  className?: string;
};

export default function MusicToggle({ className }: MusicToggleProps) {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const labels =
    language === "bn"
      ? {
          play: "সংগীত চালু",
          pause: "সংগীত বন্ধ",
        }
      : {
          play: "Play anthem",
          pause: "Pause anthem",
        };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      return;
    }
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleToggle}
        className="inline-flex items-center gap-2 rounded-full border border-[#1f0a36] bg-[#3b165f] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-white)] shadow-sm transition hover:bg-[#4a1f73]"
        aria-label={isPlaying ? labels.pause : labels.play}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {isPlaying ? labels.pause : labels.play}
      </button>
      <audio ref={audioRef} src="/Music/his2026.mp3" loop preload="auto" />
    </div>
  );
}
