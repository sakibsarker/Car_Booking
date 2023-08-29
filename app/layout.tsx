
import './globals.css'
import { Inter,Outfit } from 'next/font/google'
import Footer from '@/components/Footer'
import {ClerkProvider} from '@clerk/nextjs'
import Navbar from '@/components/Navbar'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Booking',
  description: 'easy to travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
