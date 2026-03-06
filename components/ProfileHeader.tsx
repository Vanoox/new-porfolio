import React from "react";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-xl">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-6 bg-gray-100 dark:bg-gray-700 ring-2 ring-gray-200 dark:ring-gray-600 transition-colors duration-500">
        <img
          src="https://api.dicebear.com/7.x/notionists/svg?seed=John"
          alt="John Thoinn"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
        John Thoinn
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md transition-colors duration-500">
        Professional sports producer, commentators, esports, wellness advices, fitness, and pilates.
      </p>
    </div>
  );
}
