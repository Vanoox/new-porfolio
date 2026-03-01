import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-8">
      {/* Logo */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-900">
        <span className="text-gray-900 font-bold text-sm">C</span>
      </div>
      
      {/* Linki */}
      <div className="hidden sm:flex space-x-10 text-sm font-medium">
        <Link href="/" className="text-gray-900">Home</Link>
        <Link href="/profile" className="text-gray-400 hover:text-gray-900 transition-colors">Profile</Link>
        <Link href="/blog" className="text-gray-400 hover:text-gray-900 transition-colors">Blog</Link>
        <Link href="/contact" className="text-gray-400 hover:text-gray-900 transition-colors">Contact</Link>
      </div>
      
      {/* Pusty element dla balansu, ponieważ usunęliśmy logowanie */}
      <div className="w-8"></div>
    </nav>
  );
}
