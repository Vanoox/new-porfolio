"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DynamicBackground() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Dodano normalizację ścieżki - obcina /en, /pl, /ja
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 1. HOME ( / ) - Plusy i kropki
  const homeLight = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 40v20M40 50h20' stroke='%23000000' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23000000'/%3E%3Ccircle cx='90' cy='90' r='3' fill='%23000000'/%3E%3C/svg%3E")`;
  const homeDark  = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 40v20M40 50h20' stroke='%23FFFFFF' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23FFFFFF'/%3E%3Ccircle cx='90' cy='90' r='3' fill='%23FFFFFF'/%3E%3C/svg%3E")`;

  // 2. CONTACT ( /contact ) - Koperty
  const contactLight = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23000000' stroke-width='3' stroke-linejoin='round' fill='none'%3E%3Crect x='40' y='45' width='40' height='30' rx='2'/%3E%3Cpath d='M40 45l20 15 20-15'/%3E%3C/g%3E%3C/svg%3E")`;
  const contactDark  = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23FFFFFF' stroke-width='3' stroke-linejoin='round' fill='none'%3E%3Crect x='40' y='45' width='40' height='30' rx='2'/%3E%3Cpath d='M40 45l20 15 20-15'/%3E%3C/g%3E%3C/svg%3E")`;

  // 3. VOICE ACTING ( /voice-acting ) - Fale dźwiękowe
  const voiceLight = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 40v20M50 20v60M70 30v40' stroke='%23000000' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`;
  const voiceDark  = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 40v20M50 20v60M70 30v40' stroke='%23FFFFFF' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`;

  // 4. LESSONS ( /lessons ) - Tekst / Języki
  const lessonLight = `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' font-family='sans-serif' font-weight='bold'%3E%3Ctext x='20' y='40' font-size='16'%3EEnglish%3C/text%3E%3Ctext x='110' y='80' font-size='20'%3E日本語%3C/text%3E%3Ctext x='30' y='140' font-size='14'%3EVocabulary%3C/text%3E%3Ctext x='130' y='170' font-size='18'%3Eア%3C/text%3E%3C/g%3E%3C/svg%3E")`;
  const lessonDark  = `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' font-family='sans-serif' font-weight='bold'%3E%3Ctext x='20' y='40' font-size='16'%3EEnglish%3C/text%3E%3Ctext x='110' y='80' font-size='20'%3E日本語%3C/text%3E%3Ctext x='30' y='140' font-size='14'%3EVocabulary%3C/text%3E%3Ctext x='130' y='170' font-size='18'%3Eア%3C/text%3E%3C/g%3E%3C/svg%3E")`;

  // 5. TRAINING ( /training ) - Hantle/Ciężary
  const trainingLight = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23000000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='none'%3E%3Cpath d='M20 100 L100 20 M10 80 L40 110 M80 10 L110 40'/%3E%3C/g%3E%3C/svg%3E")`;
  const trainingDark  = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23FFFFFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='none'%3E%3Cpath d='M20 100 L100 20 M10 80 L40 110 M80 10 L110 40'/%3E%3C/g%3E%3C/svg%3E")`;

  const defaultPattern = `none`;

  let lightPattern = defaultPattern;
  let darkPattern = defaultPattern;
  let bgSize = "100px 100px";

  // Zmiana warunków na 'normalizedPath'
  if (normalizedPath === '/voice-acting') {
    lightPattern = voiceLight;
    darkPattern = voiceDark;
    bgSize = "100px 100px";
  } else if (normalizedPath === '/lessons') {
    lightPattern = lessonLight;
    darkPattern = lessonDark;
    bgSize = "200px 200px";
  } else if (normalizedPath === '/training') {
    lightPattern = trainingLight;
    darkPattern = trainingDark;
    bgSize = "120px 120px";
  } else if (normalizedPath === '/') {
    lightPattern = homeLight;
    darkPattern = homeDark;
    bgSize = "100px 100px";
  } else if (normalizedPath === '/contact') {
    lightPattern = contactLight;
    darkPattern = contactDark;
    bgSize = "120px 120px";
  }

  if (lightPattern === defaultPattern) return null;

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none -z-10 animate-pattern-slide opacity-10 dark:hidden"
        style={{ backgroundImage: lightPattern, backgroundSize: bgSize, backgroundRepeat: 'repeat' }}
      />
      
      <div 
        className="fixed inset-0 pointer-events-none -z-10 animate-pattern-slide opacity-10 hidden dark:block"
        style={{ backgroundImage: darkPattern, backgroundSize: bgSize, backgroundRepeat: 'repeat' }}
      />
    </>
  );
}
