import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Inter as FontSans } from "next/font/google"

import './globals.css'
import { cn } from '@/lib/utils'
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  )
}
