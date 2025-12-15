import Nav from '@/components/Nav'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      <body className={`${geist.className} ${geist.variable} antialiased transition-all`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="max-w-[40rem] flex flex-col justify-center items-center mx-auto sm:px-0 px-2">
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
