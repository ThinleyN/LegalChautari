"use client";

import { Inter } from "next/font/google";
import { Merriweather, Lato, Oswald, Playfair_Display, Roboto } from "next/font/google"
import ClientWrapper from "@/components/organisms/ClientWrapper";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

// Heading font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
  variable: "--font-heading",
})

// Accent font
const robotoFont = Roboto({
  subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-accent",
})

//Body font
// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["400", "600"], // adjust as needed
//   variable: "--font-body",
// })

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

      <body className={`bg-[#f8f9fa] dark:bg-black ${inter.className} ${robotoFont.className} ${playfairDisplay.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}


