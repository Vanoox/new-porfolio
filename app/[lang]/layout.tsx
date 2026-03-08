import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import DynamicBackground from "@/components/DynamicBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Thoinn - Professional Portfolio",
  description: "Professional sports producer, commentators, esports, wellness advices, fitness, and pilates.",
};

export default async function Layout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-100 dark:bg-[#0A0D13] min-h-screen flex items-center justify-center relative overflow-x-hidden transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
          <DynamicBackground />

          <div className="w-full flex flex-col items-center p-4 sm:p-8 lg:p-12">
            <div className="w-full max-w-7xl bg-background rounded-[3rem] shadow-lg flex flex-col relative">
              <Navbar currentLang={lang} />
              <main className="flex flex-col items-center px-6 md:px-12 pb-12 w-full">{props.children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
