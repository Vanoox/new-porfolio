import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
        <div className="mb-6 text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-4 transition-colors duration-500">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500">
          {description}
        </p>
      </div>
    </Link>
  );
}
