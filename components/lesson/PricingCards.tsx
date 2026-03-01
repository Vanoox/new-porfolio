import React from 'react';

export default function PricingCards() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Górny rząd - dwie karty obok siebie */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Karta 1: Trial / Fail Lesson */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Fail Lesson</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$100</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">$100 for lesson</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">$30 for lesson</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2.5 rounded-full transition-colors">
            Book act
          </button>
        </div>

        {/* Karta 2: 99 Lesson */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-6 flex flex-col">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">99 Lesson</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$150</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">370 for lesson</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-auto">570 for lesson</p>
          <button className="w-full mt-6 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs font-semibold py-2.5 rounded-full transition-colors">
            Lean more
          </button>
        </div>
        
      </div>

      {/* Dolny rząd - długa karta (Lesson Lesson) */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Lesson Lesson</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$100</span>
          <span className="text-sm font-medium text-gray-500">/mo</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">45200 lessons</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">800min lesson</p>
      </div>

    </div>
  );
}
