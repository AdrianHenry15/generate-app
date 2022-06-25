import React from "react"
import { BsPlayCircle } from "react-icons/bs"
import { FaStepBackward, FaStepForward } from "react-icons/fa"

const MusicPlayer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center p-4 z-[100] w-full bg-zinc-900">
        {/* Artist Artwork */}
        <div></div>
        {/* Middle of Navbar */}
        <div className="max-w-xs">
          <button>
            <FaStepBackward className="text-white h-6 w-16 mb-2" />
          </button>
          <button>
            <BsPlayCircle className="text-white h-10 w-10" />
          </button>
          <button>
            <FaStepForward className="text-white h-6 w-16 mb-2" />
          </button>
        </div>
        {/* Right Side of Navbar */}
      </div>
    </div>
  )
}

export default MusicPlayer
