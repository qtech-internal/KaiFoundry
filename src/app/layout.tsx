import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/page";
import Navbar from "./components/Navbar";
import ZoomResponsiveWrapper from "./components/ZoomResponsiveWrapper"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ['400', '500'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ['400', '500'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kai Foundry",
  description: "We build scalable and secure software solutions.",
  openGraph: {
    title: "Your IT Company - Best Software Solutions",
    description: "We build scalable and secure software solutions.",
    url: "https://kaifoundry.com/",
    images: ["/logo.ico"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ZoomResponsiveWrapper />
        <div
          id="zoom-wrapper"
          className="relative"
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
