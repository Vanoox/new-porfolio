"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { renderToStaticMarkup } from "react-dom/server";
import {
  HouseIcon,
  EnvelopeSimpleIcon,
  MicrophoneStageIcon,
  GraduationCapIcon,
  TargetIcon,
} from "@phosphor-icons/react/ssr";

const generateSvgPattern = (IconComponent: any, color: string, boxSize: number) => {
  const iconSize = boxSize / 2;
  const offset = (boxSize - iconSize) / 2;

  const svgString = renderToStaticMarkup(
    <svg xmlns="http://www.w3.org/2000/svg" width={boxSize} height={boxSize}>
      <IconComponent size={iconSize} color={color} weight="regular" x={offset} y={offset} />
    </svg>,
  );

  return `url("data:image/svg+xml,${encodeURIComponent(svgString)}")`;
};

const ROUTE_CONFIG: Record<string, { icon: any; size: number }> = {
  "/": { icon: HouseIcon, size: 100 },
  "/contact": { icon: EnvelopeSimpleIcon, size: 120 },
  "/voice-acting": { icon: MicrophoneStageIcon, size: 100 },
  "/lessons": { icon: GraduationCapIcon, size: 150 },
  "/training": { icon: TargetIcon, size: 120 },
};

export default function DynamicBackground() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/") || "/";
  const config = ROUTE_CONFIG[normalizedPath];

  if (!config) return null;

  const { icon, size } = config;

  const lightPattern = generateSvgPattern(icon, "#000000", size);
  const darkPattern = generateSvgPattern(icon, "#FFFFFF", size);
  const bgSizeStyle = `${size}px ${size}px`;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none -z-10 animate-pattern-slide opacity-10 dark:hidden"
        style={{
          backgroundImage: lightPattern,
          backgroundSize: bgSizeStyle,
          backgroundRepeat: "repeat",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none -z-10 animate-pattern-slide opacity-10 hidden dark:block"
        style={{
          backgroundImage: darkPattern,
          backgroundSize: bgSizeStyle,
          backgroundRepeat: "repeat",
        }}
      />
    </>
  );
}
