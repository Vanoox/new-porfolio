import React from 'react';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-lg mb-12">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-5 bg-gray-100 ring-1 ring-gray-200">
        <img 
          src="https://api.dicebear.com/7.x/notionists/svg?seed=John" 
          alt="John Thoinn" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">John Thoinn</h1>
      <p className="text-xs text-gray-400 leading-relaxed max-w-[340px]">
        Professional sports producer, commentators, esports, wellness advices, fitness, and pilates.
      </p>
    </div>
  );
}
