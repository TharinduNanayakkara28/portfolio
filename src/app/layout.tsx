import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tharindun.online'),
  title: `${content.personal.name} | Portfolio`,
  description: content.personal.valueProp,
  openGraph: {
    title: `${content.personal.name} | Portfolio`,
    description: content.personal.valueProp,
    url: 'https://tharindun.online',
    siteName: `${content.personal.name} Portfolio`,
    images: [
      {
        url: '/assets/profile.jpg',
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
    images: ['/assets/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${jost.variable} text-[#f4f5f7] antialiased relative min-h-screen overflow-x-hidden`}>
        {/* Ambient monochrome vignette (neutral, no color) */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
