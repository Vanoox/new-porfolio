import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import DynamicBackground from "@/components/DynamicBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { navigation, settingsQuery } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Thoinn - Professional Portfolio",
  description: "Professional sports producer, commentators, esports, wellness advices, fitness, and pilates.",
};

export default async function Layout(props: LayoutProps<"/[lang]">) {
  const params = await props.params;

  const [page, settings] = await Promise.all([
    client.fetch(navigation, { language: params.lang }),
    client.fetch(settingsQuery),
  ]);

  if (page === null) {
    notFound();
  }

  const customCss = settings?.cssVariables;

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>{customCss && <style dangerouslySetInnerHTML={{ __html: customCss }} />}</head>
      <body
        className={`${inter.className} bg-gray-100 dark:bg-[#0A0D13] min-h-screen flex items-center justify-center relative overflow-x-hidden transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
          <DynamicBackground />

          <div className="w-full flex flex-col items-center p-4 sm:p-8 lg:p-12">
            <div className="w-full max-w-5xl bg-background rounded-[3rem] shadow-lg flex flex-col relative">
              <Navbar
                currentLang={params.lang}
                home={page.navigations?.home ?? ""}
                voiceActing={page.navigations?.voiceActing ?? ""}
                lessons={page.navigations?.lessons ?? ""}
                training={page.navigations?.training ?? ""}
                contact={page.navigations?.contact ?? ""}
                languageSwitcher={page.languageSwitcher ?? ""}
              />
              <main className="flex flex-col items-center px-6 md:px-12 pb-12 w-full">{props.children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
