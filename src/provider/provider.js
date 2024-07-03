'use client'

import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "next-themes"
import { extendTailwindMerge } from "tailwind-merge";

export default function Provider({children}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
    </ThemeProvider>
    </NextUIProvider>
    
  )
}
