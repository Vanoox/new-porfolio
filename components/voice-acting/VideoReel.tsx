import React from 'react';
import Link from 'next/link';
import { PlayIcon, ChevronRightIcon } from '@/components/icons';

export default function VideoReel() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Video Reel</h2>
        <Link
          href="/voice-acting/reel"
          className="text-xs font-medium text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
        >
          View all
          <ChevronRightIcon />
        </Link>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.25),transparent_55%)]" />
              <button
                className="absolute inset-0 grid place-items-center"
                aria-label="Play video reel"
                type="button"
              >
                <span className="w-14 h-14 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur border border-white/50 dark:border-white/10 grid place-items-center text-gray-900 dark:text-white">
                  <PlayIcon className="w-6 h-6 ml-[2px]" />
                </span>
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Demo Reel</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Short compilation of voice acting samples for commercials, narration and character work.
            </p>
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Open reel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
