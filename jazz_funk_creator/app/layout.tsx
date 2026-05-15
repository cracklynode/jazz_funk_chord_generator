
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jazz Funk Song Chord Progression Creator',
  description: 'Generate authentic Jazz Funk song structures and chord progressions with detailed voicings and fingerings for keyboard and guitar. Perfect for musicians, composers, and learners.',
  keywords: 'jazz funk, chord progressions, music theory, lead sheets, guitar chords, keyboard voicings, music composition',
  authors: [{ name: 'Nick Foard' }],
  openGraph: {
    title: 'Jazz Funk Song Chord Progression Creator',
    description: 'Generate authentic Jazz Funk compositions with detailed chord voicings',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
