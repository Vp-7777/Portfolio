import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { SmoothScroller } from "@/features/motion/SmoothScroller";
import { Navbar } from "@/features/ui/Navbar";
import { CommandMenu } from "@/features/ui/CommandMenu";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const monoFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Patel — Software & AI Systems Engineer",
  description:
    "Portfolio of Vishal Patel. Software & AI Systems Engineer studying CS at SRM IST (9.74 CGPA). Interning @ RideAbit & QRaptor. Building AutisMind-AI, PrithviQ & CampuSwap.",
  openGraph: {
    title: "Vishal Patel — Software & AI Systems Engineer",
    description:
      "CS Undergrad at SRM IST (9.74 CGPA). Interning @ RideAbit & QRaptor. Building scalable software architectures and on-device AI systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Patel — Software & AI Systems Engineer",
    description:
      "CS Undergrad at SRM IST (9.74 CGPA). Interning @ RideAbit & QRaptor. Building scalable software architectures and on-device AI systems.",
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
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#090d16] text-[#f8fafc] min-h-screen relative overflow-x-hidden selection:bg-indigo-600/30 selection:text-white">
        <Navbar />
        <CommandMenu />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
