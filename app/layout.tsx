import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InfoLand",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>
          <Navbar/>
          <main>
            {children}
          </main>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
