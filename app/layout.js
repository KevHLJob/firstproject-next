import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My first App',
  description: 'Creado para practicar next.js',
  keywords:'next,react-app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
  <link rel='stylesheet' href='https://bootswatch.com/5/superhero/bootstrap.min.css' />
</head>
      <body >
        <Navigation/>
        <div className='container p-4'>
           {children}
        </div>
       
        </body>
    </html>
  )
}
