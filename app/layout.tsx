import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Veyro — Autonomous money. Your rules.", description: "Tell it what you want. Set the limits. Let it work.", icons: { icon: "/icon.svg" } };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2P3LZ7ZWJ6" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2P3LZ7ZWJ6');`}</Script></body></html>;
}
