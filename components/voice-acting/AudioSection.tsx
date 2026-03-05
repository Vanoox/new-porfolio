"use client";

import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon, VolumeIcon } from "@/components/Icons";

type Track = {
  id: string;
  title: string;
  src: string;
};

// Pomocnicza funkcja formatująca czas (MM:SS)
const formatTime = (time: number) => {
  if (isNaN(time)) return "00:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

export default function AudioSection({ tracks }: { tracks: Track[] }) {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [progresses, setProgresses] = useState<Record<string, { current: number, duration: number }>>({});
  const [volumes, setVolumes] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialVolumes: Record<string, number> = {};
    tracks.forEach(t => initialVolumes[t.id] = 0.5);
    setVolumes(initialVolumes);
  }, [tracks]);

  const stopAll = () => {
    Object.values(audioRefs.current).forEach((el) => {
      if (el) el.pause();
    });
  };

  const togglePlay = async (id: string) => {
    const el = audioRefs.current[id];
    if (!el) return;

    if (playingId === id) {
      el.pause();
      setPlayingId(null);
    } else {
      stopAll();
      try {
        await el.play();
        setPlayingId(id);
      } catch {
        setPlayingId(null);
      }
    }
  };

  const handleTimeUpdate = (id: string) => {
    const el = audioRefs.current[id];
    if (el) {
      setProgresses(prev => ({
        ...prev,
        [id]: { current: el.currentTime, duration: el.duration || 0 }
      }));
    }
  };

  const handleSeek = (id: string, value: number) => {
    const el = audioRefs.current[id];
    if (el) {
      el.currentTime = value;
      setProgresses(prev => ({
        ...prev,
        [id]: { current: value, duration: el.duration }
      }));
    }
  };

  const handleVolumeChange = (id: string, value: number) => {
    const el = audioRefs.current[id];
    if (el) el.volume = value;
    setVolumes(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="w-full">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">Audio Library</h2>
      
      {/* Siatka 3x3 dla odtwarzaczy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tracks.map((t) => {
          const isPlaying = playingId === t.id;
          const currentProgress = progresses[t.id]?.current || 0;
          const duration = progresses[t.id]?.duration || 0;
          const currentVolume = volumes[t.id] !== undefined ? volumes[t.id] : 0.5;

          return (
            <div 
              key={t.id} 
              className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md p-5 transition-all duration-300 flex flex-col gap-4 group"
            >
              
              <div className="flex items-center gap-3">
                {/* Przycisk Play/Pause */}
                <button
                  onClick={() => togglePlay(t.id)}
                  className="w-10 h-10 shrink-0 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors flex items-center justify-center"
                >
                  {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4 ml-0.5" />}
                </button>
                
                {/* Tytuł i Czas trwania */}
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{t.title}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {formatTime(currentProgress)} / {formatTime(duration)}
                  </p>
                </div>
              </div>

              {/* Stabilny, bezpieczny rząd kontrolny (Flexbox) */}
              <div className="flex items-center gap-4 w-full mt-1">
                
                {/* Pasek postępu (zajmuje całą wolną przestrzeń dzięki flex-1) */}
                <input 
                  type="range" 
                  min="0" 
                  max={duration || 100} 
                  value={currentProgress} 
                  onChange={(e) => handleSeek(t.id, parseFloat(e.target.value))}
                  className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:h-1.5 transition-all"
                />
                
                {/* Kontrolka Głośności (Sztywno przypisana z prawej strony) */}
                <div className="flex items-center gap-1.5 shrink-0 group/vol">
                  <VolumeIcon className="text-gray-400 w-3.5 h-3.5" />
                  <input 
                    type="range" 
                    min="0" max="1" step="0.01" 
                    value={currentVolume} 
                    onChange={(e) => handleVolumeChange(t.id, parseFloat(e.target.value))}
                    className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-500 dark:accent-gray-400 hover:h-1.5 transition-all"
                  />
                </div>

              </div>

              {/* Sam obiekt audio (Niewidoczny) */}
              <audio
                ref={(node) => {
                  audioRefs.current[t.id] = node;
                }}
                src={t.src}
                preload="metadata"
                onTimeUpdate={() => handleTimeUpdate(t.id)}
                onLoadedMetadata={() => handleTimeUpdate(t.id)}
                onEnded={() => setPlayingId(null)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
