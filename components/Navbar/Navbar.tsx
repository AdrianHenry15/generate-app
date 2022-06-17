import React from "react";
import {MdPersonalVideo} from 'react-icons/md'
import {RiVideoAddLine} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import {VscBell} from 'react-icons/vsc'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-3 z-[100] w-full bg-zinc-900'>

          {/* Main Logo */}
          <button className="pl-6 flex items-center space-x-2 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
            <MdPersonalVideo className="h-10 w-10 pt-1 pl-1 text-cyan-700" />
            <h1 className="text-white text-2xl font-light tracking-tighter cursor-pointer customNavbarFont">Generate</h1>
          </button>

          {/* Middle of Navbar */}
          <span className="">
            <input 
            type="search"
            name="search" 
            className="px-20 pr-80 text-justify form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" 
            placeholder="Search" />
            
          </span>

          {/* Right Side of Navbar */}
            <div>
                <button className="text-white pr-6">
                  <RiVideoAddLine className="h-5 w-5 text-white"/>
                </button>
                <button className="cursor-pointer text-white pr-6">
                  <TbGridDots className="h-5 w-5 text-white" />
                </button>
                <button className="cursor-pointer text-white pr-6">
                  <VscBell className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;
