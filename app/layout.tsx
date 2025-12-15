import Nav from '@/components/Nav'
import Intro from '@/components/sections/Intro'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const geist_mono = JetBrains_Mono({
  variable: '--font-geist-mono',
  weight: ['200', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Leo | Portfolio',
  description: 'Leo Jonsson A Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.className} ${geist.variable} ${geist_mono.className} ${geist_mono.variable} antialiased transition-all`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Intro />
          <main className="max-w-[40rem] flex flex-col justify-center items-center mx-auto sm:px-0 px-2 m-0">
            {children}
            <Toaster />
            <div className="h-[7rem]" />
          </main>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  )
}
