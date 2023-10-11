import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

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
    <div className={`${inter.variable} bg-gray-800 text-gray-100`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  </>
}

export default MyApp
