"use client";

import React, { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import NextAppDirEmotionCacheProvider from "@/components/common/ProviderRegistry/EmotionCache";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/common/ProviderRegistry/theme";

const ProviderRegistry: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RecoilRoot>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </RecoilRoot>
  );
};

export default ProviderRegistry;
