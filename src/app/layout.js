import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = { 
  title: 'ChatUI dev fetch change check 1.3',
  description: 'A chat application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}
