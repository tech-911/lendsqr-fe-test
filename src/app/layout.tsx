"use client";

// import type { Metadata } from "next";
import React, { Suspense, useEffect } from "react";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.scss";
import { Providers } from "./GlobalRedux/provider";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "./loading";
import localFont from "next/font/local";


const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-Inter",
});
const WorkSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-Work_Sans",
});
const avenirNext = localFont({
  display: "swap",
  variable: "--font-avenir-next",
  src: [
    {
      path: "../assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/AvenirNextLTPro-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

// export const metadata: Metadata = {
//   title: "Data Table app",
//   description: "Create account and view list of users on data table.",
// };

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("@/mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenirNext.variable} ${WorkSans.variable} h-screen w-screen antialiased`}
    >
      <body className={`${WorkSans.className}`}>
        <Providers>
          <Suspense fallback={<Preloader />}>{children}</Suspense>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
