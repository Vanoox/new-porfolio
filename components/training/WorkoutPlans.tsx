import React from 'react';
import { BriefcaseIcon, ChevronRightIcon } from '@/components/icons'; // Musisz upewnić się, że masz te ikony (opis poniżej)

export default function WorkoutPlans() {
  const plans = [
    { id: 1, title: 'Workout Plan 1', desc: 'Second section plan' },
    { id: 2, title: 'Workout Plan 2', desc: 'Structure workout plan' },
    { id: 3, title: 'Workout Plan 3', desc: 'Structure workout plan' },
  ];

  return (
    <section className="flex flex-col h-full w-full">
      
      {/* Nagłówek sekcji */}
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
        Pilates
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Lista planów treningowych */}
      <div className="flex flex-col gap-4 mb-10 flex-1">
        {plans.map((plan) => (
          <button 
            key={plan.id}
            className="flex items-center justify-between w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group text-left"
          >
            <div className="flex items-center gap-4">
              {/* Ikona wewnątrz kwadratu (na wzór screena) */}
              <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {plan.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {plan.desc}
                </p>
              </div>
            </div>
            
            <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </button>
        ))}
      </div>

      {/* Główny przycisk akcji na samym dole */}
      <button className="w-full max-w-[280px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full transition-colors text-sm shadow-md mt-auto">
        Call action now
      </button>

    </section>
  );
}
