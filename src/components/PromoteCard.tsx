'use client'

import { useState } from "react"
import VideoPlayer from "./VideoPlayer"
import useWindowListerner from "@/hooks/useWindowListerner"

export default function PromoteCard() {

  const [playing, setPlaying] = useState(true)

  useWindowListerner('contextmenu', (e)=>{
    e.preventDefault();
  })

  return(
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
      <VideoPlayer isPlaying={playing} vdoSrc="/vdo/venue.mp4"></VideoPlayer>
      <div className="m-5">Book Your venue today.
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
        text-white shadow-sm"
        onClick={()=> setPlaying(!playing)}>
          {playing? 'pause': 'play'}
        </button>
      </div>
  </div>

  )
  
}