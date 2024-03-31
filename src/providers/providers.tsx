"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const scrollbarStyles = {
  "*": {
    scrollbarWidth: "thin",
    scrollbarColor: "#C0BAFF transparent",
  },
};

const theme = extendTheme(
  { breakpoints },
  { styles: { global: scrollbarStyles } }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
