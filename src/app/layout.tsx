import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Jamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const jamjuree = Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo contruida com React, NextJS, TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${jamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
