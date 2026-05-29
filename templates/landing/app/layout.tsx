import "./globals.css";
import type { Metadata } from "next";
import { Syne, Fraunces } from "next/font/google";
import { meta } from "../content";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["200"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
