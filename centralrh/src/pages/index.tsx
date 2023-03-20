import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PrivateRoute from './PrivateRoute';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <PrivateRoute>
      <h1>asdasdas</h1>
             
    </PrivateRoute>
    
  )
}
