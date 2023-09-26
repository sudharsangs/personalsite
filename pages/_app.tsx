import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={`${inter.variable} bg-gray-800 text-gray-100`}>
    <Component {...pageProps} />
    <Analytics />
  </div>
}

export default MyApp
