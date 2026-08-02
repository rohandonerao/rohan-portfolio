import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rohan Donerao — Flutter Developer",
  description:
    "Portfolio of Rohan Donerao, a Computer Engineering student and Flutter/Android developer building real-time mobile apps and data-driven cloud solutions.",
  keywords: [
    "Rohan Donerao",
    "Flutter Developer",
    "Android Developer",
    "Data Analyst",
    "Firebase",
    "Portfolio",
  ],
  openGraph: {
    title: "Rohan Donerao — Flutter Developer",
    description:
      "Portfolio of Rohan Donerao, a Computer Engineering student and Flutter/Android developer building real-time mobile apps and data-driven cloud solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="noise-overlay" aria-hidden="true" />
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
