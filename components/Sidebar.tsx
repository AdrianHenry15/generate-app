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
    <div className="hidden md:flex">
    <div className="text-white whitespace-nowrap p-5 px-14 text-md lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen lg:max-w-[15rem] md:inline-flex pb-36 bg-zinc-900">
      <div className="space-y-4">

        <button className="sidebarBtn">
          <HomeIcon className="sidebarIcon" />
          <p>Home</p>
        </button>

        <button className="sidebarBtn">
          <BsCompass className="sidebarIcon" />
          <p>Explore</p>
        </button>

        <button className="sidebarBtn">
          <BsPhone className="sidebarIcon" />
          <p>Scroll</p>
        </button>

        <button className="sidebarBtn">
          <BsPeople className="sidebarIcon" />
          <p>Followers</p>
        </button>
        <hr className="sidebarBorder" />

        <button className="sidebarBtn">
          <HiOutlineLibrary className="sidebarIcon" />
          <p>Library</p>
        </button>

        <button className="sidebarBtn">
          <RiMapPinTimeLine className="sidebarIcon" />
          <p>History</p>
        </button>

        <button className="sidebarBtn">
          <MdOndemandVideo className="sidebarIcon" />
          <p>Your Videos</p>
        </button>

        <button className="sidebarBtn">
          <MdOutlineMovie className="sidebarIcon" />
          <p>Your Movies</p>
        </button>

        <button className="sidebarBtn">
          <MdMusicVideo className="sidebarIcon" />
          <p>Your Music</p>
        </button>

        <button className="sidebarBtn">
          <BsBook className="sidebarIcon" />
          <p>Your Stories</p>
        </button>

         <button className="sidebarBtn">
           <BsClockHistory className="sidebarIcon" />
            <p>Watch Later</p>
          </button>

          <button className="sidebarBtn">
          <MdKeyboardArrowDown className="sidebarIcon" />
           <p>Show More</p>
          </button>
          <hr className="sidebarBorder" />

          <h1 className="text-gray-400 font-medium"> Following </h1>
       </div>
      </div>
    </div>
  )
}

export default Sidebar
