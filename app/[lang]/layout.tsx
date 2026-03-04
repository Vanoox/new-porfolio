import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import DynamicBackground from '@/components/DynamicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Thoinn - Professional Portfolio',
  description: 'Professional sports producer, commentators, esports, wellness advices, fitness, and pilates.',
}

// Zmiana 1: Typujemy 'params' jako Promise
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Zmiana 2: Asynchronicznie wyciągamy 'lang' przy użyciu 'await'
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      
      <body className={`${inter.className} bg-gray-100 dark:bg-[#0A0D13] min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 relative overflow-x-hidden transition-colors duration-500`}>
        <DynamicBackground />

        <div className="w-full max-w-7xl bg-white dark:bg-[#1C2128] rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] flex flex-col relative z-10 transition-colors duration-500 overflow-hidden">
          <Navbar />
          <main className="flex flex-col items-center px-6 md:px-12 pb-12 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
