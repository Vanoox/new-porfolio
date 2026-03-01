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
    <Link href={href} className="block">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-50 hover:-translate-y-1 transition-transform cursor-pointer h-full">
        <div className="mb-5 text-gray-800">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 text-sm mb-3">{title}</h3>
        <p className="text-[11px] text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
