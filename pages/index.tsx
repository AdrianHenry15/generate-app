import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head'



const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Generate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='flex'>
        <Sidebar />
      </main>
    </div>
  )
}

export default Home

