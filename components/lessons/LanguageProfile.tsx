import React from 'react';

export default function LanguageProfile() {
  return (
    <section className="flex flex-col w-full max-w-[400px] mx-auto lg:mx-0">
      {/* Kontener na zdjęcie / grafikę promującą języki */}
      <div className="w-full aspect-[4/3] bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-[2rem] overflow-hidden mb-8 shadow-inner border border-blue-100 dark:border-gray-700 flex items-center justify-center relative">
        
        {/* Dekoracyjne, duże znaki w tle okna ze zdjęciem */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 select-none pointer-events-none">
          <span className="text-9xl font-bold font-serif tracking-tighter">Aあ</span>
        </div>

        {/* Miejsce na Twoje rzeczywiste zdjęcie (Docelowo podmień na <img>) */}
        <div className="w-3/4 h-[90%] bg-white dark:bg-gray-600 rounded-t-full shadow-lg relative overflow-hidden flex justify-center items-end border-b-0 border border-gray-100 dark:border-gray-500 z-10">
          <svg className="w-4/5 h-4/5 text-gray-300 dark:text-gray-400 absolute bottom-[-5%]" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      {/* Tytuł i krótki opis */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Language Tutoring
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        Unlock your potential with personalized language lessons. Whether you're starting from scratch or looking to perfect your business vocabulary, my tailored approach will help you reach your fluency goals.
      </p>
    </section>
  );
}
