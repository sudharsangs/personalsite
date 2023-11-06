import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ["300","400","500","600","700","800"] })

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-SLSPM9Q29G" />
    <Script strategy='lazyOnload' id="analytics">
      {`  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SLSPM9Q29G');
      `}
    </Script>
    <div className={`${inter.className} bg-slate-900 text-gray-100 font-inter`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  </>
}

export default MyApp
