"use client";
import { ThemeProvider } from "next-themes";

import { THEME } from "@/lib/constants/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={THEME.default} enableSystem>
      {children}
    </ThemeProvider>
  );
}
