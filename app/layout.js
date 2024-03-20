import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'

import { CSPostHogProvider } from './providers'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo Diniz',
  description: 'My personal portfolio, made by hand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <Toaster richColors />
        </body>
      </CSPostHogProvider>
    </html>
  )
}
