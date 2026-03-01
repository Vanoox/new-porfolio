"use client";

import React, { useMemo, useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "@/components/icons";

type Track = {
  id: string;
  title: string;
  src: string;
  duration: string;
};

// Wewnętrzny, mały komponent tylko dla fali dźwiękowej
const Wave = ({ bars = 48 }: { bars?: number }) => {
  const heights = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < bars; i++) {
      const v = Math.sin(i * 0.65) * 0.5 + 0.5;
      arr.push(Math.round(20 + v * 60));
    }
    return arr;
  }, [bars]);

  return (
    <div className="flex items-center gap-[3px] w-full">
      {heights.map((h, idx) => (
        <span
          key={idx}
          className="inline-block w-[3px] rounded-full bg-gray-300 dark:bg-gray-600"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
};

export default function AudioSection({ tracks }: { tracks: Track[] }) {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);

  const stopAll = () => {
    Object.values(audioRefs.current).forEach((el) => {
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
    });
  };

  const toggle = async (id: string) => {
    const el = audioRefs.current[id];
    if (!el) return;

    if (playingId === id) {
      el.pause();
      setPlayingId(null);
      return;
    }

    stopAll();
    try {
      await el.play();
      setPlayingId(id);
    } catch {
      setPlayingId(null);
    }
  };

  return (
    <section className="lg:col-span-2">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Audio</h2>
      <div className="space-y-4">
        {tracks.map((t) => {
          const isPlaying = playingId === t.id;
          return (
            <div key={t.id} className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] px-5 py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggle(t.id)}
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors grid place-items-center text-gray-900 dark:text-white"
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon className="ml-[1px]" />}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{t.title}</p>
                    <span className="text-xs text-gray-400 tabular-nums">{t.duration}</span>
                  </div>
                  <div className="h-8 flex items-center">
                    <Wave />
                  </div>
                </div>
              </div>
              <audio
                ref={(node) => {
                  audioRefs.current[t.id] = node;
                  if (node) {
                    node.onended = () => setPlayingId((prev) => (prev === t.id ? null : prev));
                  }
                }}
                src={t.src}
                preload="none"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
