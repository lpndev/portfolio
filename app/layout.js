import { DM_Sans as FontSans } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Leonardo Diniz',
  description: 'My personal portfolio, made by hand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
