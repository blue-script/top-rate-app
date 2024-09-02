import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import React, { ReactNode } from 'react'
import { Footer, Header, Sidebar } from '@/components'
import s from './layout.module.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})

export const metadata: Metadata = {
  title: 'Лучшие продукты',
  description: 'Рейтинг продуктов'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
        <div className={s.layout_wrapper}>
          <Header className={s.header} />

          <Sidebar className={s.sidebar} />

          <main className={s.main}>{children}</main>

          <Footer className={s.footer} />
        </div>
      </body>
    </html>
  )
}
