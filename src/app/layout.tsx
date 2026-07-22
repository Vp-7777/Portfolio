import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { SmoothScroller } from "@/features/motion/SmoothScroller";
import { GlobalCanvas } from "@/features/webgl/GlobalCanvas";
import { Navbar } from "@/features/ui/Navbar";
import { SystemInitializer } from "@/features/ui/SystemInitializer";
import { ChapterObserver } from "@/features/motion/ChapterObserver";
import { CustomCursor } from "@/features/cursor/CustomCursor";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Patel — Creative AI & ML Systems Engineer",
  description: "Portfolio of Vishal Patel, specializing in Artificial Intelligence, Machine Learning, and reliable software systems designed with precision and craftsmanship.",
  openGraph: {
    title: "Vishal Patel — Creative AI & ML Systems Engineer",
    description: "Designing and engineering repeatable, reliable, and high-performance software systems with absolute precision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Patel — Creative AI & ML Systems Engineer",
    description: "Designing and engineering repeatable, reliable, and high-performance software systems with absolute precision.",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}>
      <body className="bg-background text-foreground selection:bg-accent selection:text-background min-h-screen relative">
        <SystemInitializer />
        <CustomCursor />
        <Navbar />
        <SmoothScroller>
          <ChapterObserver />
          {children}
        </SmoothScroller>
        <GlobalCanvas />
      </body>
    </html>
  );
}
