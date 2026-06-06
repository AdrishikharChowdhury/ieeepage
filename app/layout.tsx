import type { Metadata } from "next";
import { Open_Sans, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@aejkatappaja/phantom-ui/ssr.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEEE STCET SB",
  description: "The Student Branch of IEEE STCET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", openSans.variable)}
    >
      <body className="bg-light-canvas">
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
