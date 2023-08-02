import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar2 from '../../../components/navbar2/Navbar2.jsx'
import Footer from '../../../components/footer/Footer.jsx'
import Services from '../../../components/sevices/Services.jsx'



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
        <Navbar2/>
        <div className='my-20'>
        <Services/>
        </div>
        <Footer/>
      </main>
     
    </>
  )
}

