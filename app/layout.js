import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo Diniz',
  description: 'My personal portfolio, made by hand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <CSPostHogProvider>
        <body className={inter.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  )
}
