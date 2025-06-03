import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Script from 'next/script';
import Footer from "@/components/modules/footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudharsan GS | Software Engineer",
  description: "Software Engineer specializing in web development with React, TypeScript, and NextJS",
  keywords: "software engineer, web developer, react, typescript, nextjs, bengaluru",
  authors: [{ name: "Sudharsan GS" }],
  creator: "Sudharsan GS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudharsangs.dev",
    title: "Sudharsan GS | Software Engineer",
    description: "Software Engineer specializing in web development",
    siteName: "Sudharsan GS Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan GS | Software Engineer",
    description: "Software Engineer specializing in web development",
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
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased h-full`}
      >
        <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="backdrop-blur-sm z-20">
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