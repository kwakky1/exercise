"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/common/Header";
import { RecoilRoot } from "recoil";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <RecoilRoot>
          <Header />
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
