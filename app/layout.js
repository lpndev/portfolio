import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'

import './globals.css'

import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo Diniz',
  description: 'My personal portfolio, made by hand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
