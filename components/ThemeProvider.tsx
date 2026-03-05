// "use client";

// import { ReactNode, useEffect, useState } from "react";

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [mounted, setMounted] = useState(false);

//   // Zapobiega błędowi hydratacji w Next.js
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <>{children}</>;
//   }

// }

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
