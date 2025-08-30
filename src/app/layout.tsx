"use client";

import { Inter } from "next/font/google";
import { Merriweather, Lato, Oswald } from "next/font/google"
import ClientWrapper from "@/components/organisms/ClientWrapper";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

// Heading font
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
  variable: "--font-merriweather",
})

// Body font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

// Accent font
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600"], // adjust as needed
  variable: "--font-oswald",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#F2F2F2] dark:bg-black ${inter.className} ${oswald.className} ${lato.className} ${merriweather.className}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}


