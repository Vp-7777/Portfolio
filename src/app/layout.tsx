import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, Space_Mono } from "next/font/google";
import { SmoothScroller } from "@/features/motion/SmoothScroller";
import { CustomCursor } from "@/features/cursor/CustomCursor";
import { FilmGrain } from "@/features/ui/FilmGrain";
import { Preloader } from "@/features/ui/Preloader";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vishalpatel.dev"),
  title: {
    default: "Vishal Patel — Software & AI Systems Engineer",
    template: "%s | Vishal Patel",
  },
  description:
    "Teaching software to see, sort & screen the real world. Computer Science (AI & ML) @ SRM IST (9.74 CGPA · 10.0 Sem 2 GPA). Interning @ RideAbit & QRaptor. Creator of AutisMind-AI, PrithviQ & CampuSwap.",
  keywords: [
    "Vishal Patel",
    "Software Engineer",
    "AI Systems Engineer",
    "Machine Learning Engineer",
    "SRM IST",
    "RideAbit",
    "QRaptor",
    "Computer Vision",
    "React Native",
    "FastAPI",
    "PostgreSQL",
    "AutisMind-AI",
    "PrithviQ",
    "CampuSwap",
    "Chennai Developer",
    "Portfolio",
  ],
  authors: [{ name: "Vishal Patel", url: "https://vishalpatel.dev" }],
  creator: "Vishal Patel",
  publisher: "Vishal Patel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vishal Patel — Software & AI Systems Engineer",
    description:
      "Teaching software to see, sort & screen the real world. CS Undergrad at SRM IST (9.74 CGPA · 10.0 Sem 2 GPA). Interning @ RideAbit & QRaptor. Creator of AutisMind-AI & PrithviQ.",
    url: "https://vishalpatel.dev",
    siteName: "Vishal Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Patel — Software & AI Systems Engineer",
    description:
      "Teaching software to see, sort & screen the real world. CS Undergrad at SRM IST (9.74 CGPA · 10.0 Sem 2 GPA). Interning @ RideAbit & QRaptor.",
    creator: "@vishalp7777",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vishalpatel.dev",
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
      className={`${fraunces.variable} ${instrumentSans.variable} ${spaceMono.variable} scroll-smooth antialiased bg-[#0A0A0A]`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#0A0A0A] text-[#ECEAE2] min-h-screen relative selection:bg-[#C5A059]/30 selection:text-[#ECEAE2]">
        <Preloader />
        <FilmGrain />
        <CustomCursor />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
