import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head'
import Dashboard from './Dashboard';
import Player from '../components/Player'



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
        <Dashboard />
        
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
      
    </div>
  )
}

export default Home

