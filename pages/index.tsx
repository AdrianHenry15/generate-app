import type { NextPage } from 'next'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';



const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>

      <Navbar />
      <main className='flex'>
        <Sidebar />
      </main>
    </div>
  )
}

export default Home

