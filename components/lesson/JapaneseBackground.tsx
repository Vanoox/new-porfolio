import React from 'react';

export default function JapaneseBackground() {
  return (
    <>
      {/* Prawy górny róg */}
      <div className="absolute top-0 right-0 text-5xl font-light text-gray-100 dark:text-gray-800/50 -z-0 select-none pointer-events-none tracking-widest hidden md:block">
        日本の英語
      </div>
      
      {/* Lewa strona, obok kalendarza (pionowo) */}
      <div className="absolute top-40 -left-12 text-6xl font-light text-gray-100 dark:text-gray-800/50 -z-0 select-none pointer-events-none [writing-mode:vertical-rl] hidden xl:block">
        タカラン
      </div>
    </>
  );
}
