import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Central Hub',
  description: 'John Thoinn - Professional sports producer',
};

// Skrypt sprawdzający localStorage i preferencje systemu PRZED wyrenderowaniem Reacta
const themeScript = `
  (function() {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning jest wymagane, by Next.js nie zgłaszał błędu, 
    // że tag <html> na serwerze różni się od tego w przeglądarce (przez dodanie klasy 'dark')
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
        
        {/* Główny kontener - powiększony do max-w-6xl */}
        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-[2.5rem] shadow-2xl w-full max-w-6xl overflow-hidden flex flex-col min-h-187.5 transition-colors duration-500">
          
          <Navbar />
          
          <div className="flex-1 flex flex-col items-center justify-center px-8 py-6 mb-16">
            {children}
          </div>
          
        </div>
      </body>
    </html>
  );
}
