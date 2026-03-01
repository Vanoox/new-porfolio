import React from 'react';

export default function CalendarWidget() {
  // Przykładowe dni do wygenerowania siatki miesiąca
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-8">
      
      {/* Nagłówek symulujący logo aplikacji umawiającej */}
      <div className="flex items-center gap-2 mb-8 justify-center">
        <div className="w-5 h-5 rounded-full bg-blue-500 grid place-items-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <span className="font-semibold text-gray-900 dark:text-white text-lg">Calendly</span>
      </div>

      {/* Kontrolki miesiąca */}
      <div className="flex items-center justify-between mb-6 px-4">
        <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <span className="font-medium text-gray-900 dark:text-white text-sm">August 2023</span>
        <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      {/* Dni tygodnia */}
      <div className="grid grid-cols-7 gap-2 mb-4 text-center">
        {['Sun', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{day}</div>
        ))}
      </div>

      {/* Siatka dni z wybranym dniem (np. 2) */}
      <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
        <div className="col-span-2"></div> {/* Puste dni na start */}
        {days.map(d => (
          <button 
            key={d} 
            className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-colors
              ${d === 2 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-semibold' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Stopka widgetu */}
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">See boxes on calendly</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors">
          Booking
        </button>
      </div>
      
    </div>
  );
}
