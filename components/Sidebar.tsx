import React, { useEffect, useState } from "react"
import {
  HomeIcon,
  SearchCircleIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/outline"
import { HeartIcon } from "@heroicons/react/solid"
import {BsPhone, BsPeople, BsCompass, BsClockHistory, BsBook, BsEye} from 'react-icons/bs'
import {HiOutlineLibrary} from 'react-icons/hi'
import {MdOndemandVideo, MdMusicVideo, MdOutlineMovie, MdKeyboardArrowDown} from 'react-icons/md'
import {RiMapPinTimeLine} from 'react-icons/ri'


const Sidebar = () => {

  return (
    <div className="text-white p-5 px-14 text-md lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen lg:max-w-[15rem] md:inline-flex pb-36 bg-zinc-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <BsCompass className="h-5 w-5" />
          <p>Explore</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <BsPhone className="h-5 w-5" />
          <p>Scroll</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <BsPeople className="h-5 w-5" />
          <p>Followers</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-700" />

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <HiOutlineLibrary className="h-5 w-5" />
          <p>Library</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <RiMapPinTimeLine className="h-5 w-5" />
          <p>History</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <MdOndemandVideo className="h-5 w-5" />
          <p>Your Videos</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <MdOutlineMovie className="h-5 w-5" />
          <p>Your Movies</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <MdMusicVideo className="h-5 w-5" />
          <p>Your Music</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <BsBook className="h-5 w-5" />
          <p>Your Stories</p>
        </button>

        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <BsClockHistory className="h-5 w-5" />
          <p>Watch Later</p>
        </button>
        <button className="flex items-center space-x-6 hover:text-gray-700 active:text-gray-700 focus:text-gray-700">
          <MdKeyboardArrowDown className="h-5 w-5" />
          <p>Show More</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-700" />

        <h1 className="text-gray-400 font-medium"> Following </h1>
      </div>
    </div>
  )
}

export default Sidebar
