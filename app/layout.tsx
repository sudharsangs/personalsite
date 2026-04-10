import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from 'next/script';
import Footer from "@/components/modules/footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudharsan GS | Software Engineer & Fullstack Developer",
  description: "Software Engineer with 5+ years experience building scalable, high-performance web applications. Specialized in React, TypeScript, and Next.js with proven expertise at companies like Fubo.",
  keywords: "software engineer, fullstack developer, react developer, typescript, nextjs, web applications, scalable systems, bengaluru, portfolio",
  authors: [{ name: "Sudharsan GS" }],
  creator: "Sudharsan GS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudharsangs.in",
    title: "Sudharsan GS | Software Engineer & Fullstack Developer",
    description: "Software Engineer building scalable, high-performance web applications with proven expertise in modern technologies",
    siteName: "Sudharsan GS - Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan GS | Software Engineer & Fullstack Developer",
    description: "Software Engineer building scalable, high-performance web applications with proven expertise in modern technologies",
    creator: "@sudharsangs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased h-full`}
      >
        <div className="min-h-screen w-full bg-background relative overflow-x-hidden">
          {/* Static background mesh */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/60" />
            {/* Top-left primary blob */}
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[90px]" />
            {/* Bottom-right accent blob */}
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/12 blur-[100px]" />
            {/* Center subtle tint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
            {/* Top-right secondary blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[80px]" />
            {/* Bottom-left accent blob */}
            <div className="absolute bottom-1/3 -left-20 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px]" />
            {/* Dot grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, hsl(220 70% 40%) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-4">
            <div className="relative z-20">
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-SLSPM9Q29G" />
        <Script strategy='lazyOnload' id="analytics">
          {`  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SLSPM9Q29G');
      `}
        </Script>
      </body>
    </html>
  );
}