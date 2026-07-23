import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/modules/footer";
import SiteHeader from "@/components/modules/site-header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudharsangs.in"),
  title: "Sudharsan GS | Product Engineer",
  description: "Product engineer building software across streaming, technical SEO, and manufacturing operations.",
  authors: [{ name: "Sudharsan GS" }],
  creator: "Sudharsan GS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Sudharsan GS | Product Engineer",
    description: "I build production products across streaming, technical SEO, and operations software.",
    siteName: "Sudharsan GS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan GS | Product Engineer",
    description: "I build production products across streaming, technical SEO, and operations software.",
    creator: "@sudharsangs",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <Footer />
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-SLSPM9Q29G" />
        <Script strategy="lazyOnload" id="analytics">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-SLSPM9Q29G');`}
        </Script>
      </body>
    </html>
  );
}
