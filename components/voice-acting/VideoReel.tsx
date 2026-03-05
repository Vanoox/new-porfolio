"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@/components/Icons';

type YouTubeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
};

interface VideoReelProps {
  videos: YouTubeVideo[];
  channelId: string;
}

export default function VideoReel({ videos, channelId }: VideoReelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const activeVideo = videos[currentIndex];

  const truncateDesc = (text: string, max: number) => {
    if (text.length <= max) return text;
    return text.substring(0, max) + "...";
  };

  // Zbudowanie bezpośredniego linku do kanału YT
  // ?sub_confirmation=1 dodatkowo wyświetli popup z propozycją subskrypcji
  const channelUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;

  return (
    <section className="w-full">
      {/* Górny pasek kontrolny z tytułem, licznikiem i linkiem View all */}
      <div className="flex items-center justify-between mb-6">
        
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">YouTube Showcase</h2>
        
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {videos.length}
          </span>
          
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
          >
            View all
            {/* Minimalistyczna ikonka strzałki, z lekkim odsunięciem na hover */}
            <div className="group-hover:translate-x-0.5 transition-transform">
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-inner">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col h-full justify-between">
            <div>
              <div key={activeVideo.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {activeVideo.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-wrap line-clamp-6">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={prevVideo}
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous video"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={nextVideo}
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next video"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
