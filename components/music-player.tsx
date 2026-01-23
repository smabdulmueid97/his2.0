"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const labels =
    language === "bn"
      ? {
          title: "à¦¸à§à¦•à§à¦²à§‡à¦° à¦¸à¦‚à¦—à§€à¦¤",
          subtitle: "à¦¸à§à¦•à§à¦²à§‡à¦° à¦¸à¦‚à¦—à§€à¦¤ à¦¶à§à¦¨à§à¦¨à¥¤",
          play: "à¦šà¦¾à¦²à§ à¦•à¦°à§à¦¨",
          pause: "à¦¬à¦¨à§à¦§ à¦•à¦°à§à¦¨",
        }
      : {
          title: "School Anthem",
          subtitle: "Listen to the campus anthem.",
          play: "Play",
          pause: "Pause",
        };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
      return;
    }
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-white)_90%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-3 py-3 md:px-3 2xl:px-0">
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {labels.title}
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            {labels.subtitle}
          </p>
        </div>
        <Button variant="gold" size="sm" onClick={handleToggle}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isPlaying ? labels.pause : labels.play}
        </Button>
      </div>
      <audio ref={audioRef} src="/Music/his2026.mp3" loop preload="auto" />
    </div>
  );
}




