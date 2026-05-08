import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/modules/footer";
import SiteHeader from "@/components/modules/site-header";
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
  title: "Sudharsan GS | Product Engineer",
  description:
    "Product engineer working across streaming, technical SEO, and full-stack product builds. Currently at Fubo, also building FactoStack for Indian manufacturers.",
  keywords:
    "product engineer, software engineer, frontend engineer, react developer, typescript, nextjs, technical seo, bengaluru, portfolio",
  authors: [{ name: "Sudharsan GS" }],
  creator: "Sudharsan GS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudharsangs.in",
    title: "Sudharsan GS | Product Engineer",
    description:
      "I build production products across streaming, technical SEO, and operations software.",
    siteName: "Sudharsan GS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan GS | Product Engineer",
    description:
      "I build production products across streaming, technical SEO, and operations software.",
    creator: "@sudharsangs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var root = document.documentElement;
        if (theme === 'light') {
          root.classList.remove('dark');
          root.style.colorScheme = 'light';
        } else {
          root.classList.add('dark');
          root.style.colorScheme = 'dark';
        }
      } catch (_) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      }
    })();
  `;

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased h-full`}
      >
        <div className="min-h-screen w-full bg-background relative overflow-x-hidden">
          {/* Static background mesh */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/60 dark:to-secondary/30" />
            {/* Top-left primary blob */}
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[90px] dark:bg-primary/10" />
            {/* Bottom-right accent blob */}
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/12 blur-[100px] dark:bg-accent/8" />
            {/* Center subtle tint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/8 blur-[120px] dark:bg-primary/6" />
            {/* Top-right secondary blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[80px] dark:bg-accent/5" />
            {/* Bottom-left accent blob */}
            <div className="absolute bottom-1/3 -left-20 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] dark:bg-primary/6" />
            {/* Dot grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, hsl(220 70% 40%) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>
          <div className="relative z-20">
            <SiteHeader />
            <div className="max-w-6xl mx-auto px-4 sm:px-4">
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
