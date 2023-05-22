import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homes from './homes'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <body className="bg-teal-500">
        <Login/>
      </body>
        
      
       
  )
}
