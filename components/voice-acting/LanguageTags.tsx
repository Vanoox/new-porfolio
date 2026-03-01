import React from 'react';

export default function LanguageTags({ tags }: { tags: string[] }) {
  return (
    <aside>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Language Tags</h2>
      <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((t, idx) => (
            <span
              key={`${t}-${idx}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
