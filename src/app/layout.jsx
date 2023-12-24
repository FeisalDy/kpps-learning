import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Nav from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-dvh`}>
        <Providers>
          <Nav />
          <div className='max-w-screen-lg mx-auto'>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
