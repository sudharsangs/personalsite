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
        <div className="min-h-screen w-full bg-gradient-to-br from-background via-slate-50 to-blue-50/30">
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