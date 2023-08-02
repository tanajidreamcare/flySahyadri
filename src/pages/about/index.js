import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../../components/navbar/Navbar.jsx'
import Footer from '../../../components/footer/Footer.jsx'
import {AboutComponent} from '../../../components/about/About.jsx'
import Navbar2 from '../../../components/navbar2/Navbar2.jsx'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fly Sahyadri</title>
        <meta name="description" content="images for paragliding in kamshet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Navbar/> */}
        <Navbar2/>
        <AboutComponent/>
        <Footer/>
      </main>
     
    </>
  )
}

