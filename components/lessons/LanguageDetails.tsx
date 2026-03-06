import React from "react";
import { UKFlagIcon, JapanFlagIcon } from "@/components/Icons";

export default function LanguageDetails() {
  return (
    <section className="flex flex-col h-full w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">What I Teach</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          I offer dedicated 1-on-1 tutoring sessions focused on practical conversation, pronunciation, and
          industry-specific vocabulary.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.20)] p-6 sm:p-8 flex items-start gap-6">
          <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-600 shadow-sm">
            <UKFlagIcon className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">English</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              From everyday conversational English to advanced business negotiations and esports commentary terminology.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.20)] p-6 sm:p-8 flex items-start gap-6">
          <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-600 shadow-sm">
            <JapanFlagIcon className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Japanese (日本語)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Master the basics of Hiragana and Katakana, up to fluent communication required in the Japanese
              entertainment industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
