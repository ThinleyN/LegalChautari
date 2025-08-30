"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/app/providers";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  )
}
