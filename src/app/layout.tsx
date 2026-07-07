import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${content.personal.name} | Portfolio`,
  description: content.personal.valueProp,
  openGraph: {
    title: `${content.personal.name} | Portfolio`,
    description: content.personal.valueProp,
    url: 'https://tharindu-portfolio.vercel.app', // Placeholder
    siteName: `${content.personal.name} Portfolio`,
    images: [
      {
        url: 'https://tharindu-portfolio.vercel.app/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: `${content.personal.name} - Computer Engineering Undergraduate`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.personal.name} | Portfolio`,
    description: content.personal.valueProp,
    images: ['https://tharindu-portfolio.vercel.app/og-image.jpg'], // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030014] text-slate-200 antialiased relative min-h-screen overflow-x-hidden`}>
        {/* Glow Effects matching reference image */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top Right Cyan Glow */}
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
          {/* Bottom Left Red/Pink Glow */}
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-rose-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
