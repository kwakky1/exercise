import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/common/Header";
import ProviderRegistry from "@/components/common/ProviderRegistry/ProviderRegistry";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ProviderRegistry>
          <Header />
          {children}
        </ProviderRegistry>
      </body>
    </html>
  );
}
