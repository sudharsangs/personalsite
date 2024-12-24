import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Script from 'next/script';
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
  title: "Sudharsan GS",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased h-full`}
      >
        <div className="h-full w-full bg-neutral-950">
          <div className="max-w-6xl mx-auto px-6">
            {children}
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