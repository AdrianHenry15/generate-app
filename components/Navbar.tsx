import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {MdPersonalVideo} from 'react-icons/md'
import {RiVideoAddLine} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import {VscBell} from 'react-icons/vsc'

const Navbar = () => {
    return (
      <header className="w-full">
        <div className='flex items-center justify-between p-4 z-[100] w-full bg-zinc-900'>

          {/* Main Logo */} 
          <MenuIcon className="h-8 text-white md:hidden cursor-pointer" />
          <button className="pl-6 flex items-center space-x-2 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
            <MdPersonalVideo className="lg:hidden hidden md:inline-grid flex-shrink-0 h-10 w-10 pt-1 pl-1 text-cyan-700" />
            <h1 className="hidden lg:inline-grid text-white text-4xl font-light cursor-pointer customNavbarFont">Generate</h1>
          </button>

          {/* Middle of Navbar */}
          <div className="max-w-xs">
             <div className="relative mt-1 p-3">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
             </div>
             <input 
                  type="text"
                  className="bg-gray-50 block w-full md:w-96 h-10 pl-10 sm:text-sm border-gray-300 focus:ring-cyan-700 focus:border-black" 
                  placeholder="Search">
             </input>
            </div>
        </div>
          {/* Right Side of Navbar */}
            <div className="flex items-center justify-end space-x-4">
                <button className="navBtn">
                  <RiVideoAddLine className="navIcon"/>
                </button>
                <button className="navBtn">
                  <TbGridDots className="navIcon" />
                </button>
                <button className="navBtn">
                  <VscBell className="navIcon" />
                </button>

                {/* Only on mobile phones */}
                  <MdPersonalVideo className="md:hidden flex-shrink-0 h-10 w-10 pt-1 pl-1 text-cyan-700 justify-between" />
                  <img
                        src="https://avatars.githubusercontent.com/u/95331448?s=400&u=6fbfd2861456b09738a86545c2c67e5bf418bf57&v=4"
                        alt="profile pic"
                        className="h-10 cursor-pointer rounded-full" 
                        />
                
            </div>
            <section className="block fixed inset-x-0 bottom-0 z-10 bg-zinc-900">
            <div className="flex justify-between p-7 md:hidden">
            
                <button className="mobileFooterBtn">
                  <RiVideoAddLine className="mobileFooterIcon"/>
                </button>
                <button className="mobileFooterBtn">
                  <TbGridDots className="mobileFooterIcon" />
                </button>
                <button className="mobileFooterBtn">
                  <VscBell className="mobileFooterIcon" />
                </button>
            
            </div>
              
            </section>
          </div>
        </header>
    )
}

export default Navbar;
