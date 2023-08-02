import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fly Sahyadri</title>
        <meta name="description" content="The best paragliding experience in Kamshet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Landing/>
      </main>
     
    </>
  )
}
