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
  title: "Sudharsan GS | Fullstack Developer",
  description: "Fullstack Developer crafting digital experiences that merge beautiful design with robust functionality. Specialized in React, TypeScript, and Next.js.",
  keywords: "fullstack developer, web designer, react developer, typescript, nextjs, ui/ux design, frontend developer, bengaluru, portfolio",
  authors: [{ name: "Sudharsan GS" }],
  creator: "Sudharsan GS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudharsangs.dev",
    title: "Sudharsan GS | Fullstack Developer",
    description: "Crafting digital experiences that merge beautiful design with robust functionality",
    siteName: "Sudharsan GS - Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan GS | Fullstack Developer",
    description: "Crafting digital experiences that merge beautiful design with robust functionality",
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
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