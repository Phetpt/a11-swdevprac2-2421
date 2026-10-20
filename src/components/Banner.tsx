'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner () {

  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter()
  const {data:session} = useSession()

  return (
    <div className="block p-[5px] m-0 h-[40vw] w-screen relative bg-cover bg-center" onClick={()=>setIndex(index+1)}>
      <Image src={covers[index%4]} alt="Cover" fill={true} style={{objectFit:'cover'}} priority/>
      <div className="relative top-[150px] z-20 text-center text-[rgb(252,237,237)]">
        <h1 style={{ fontSize: '40px' }}>where every event finds its venue</h1>
        <h3 style={{ fontSize: '18px' }}>Your dream event begins here. we provide a breathtaking backdrop for your special day. With elegant ballrooms, exquisite dining, and personalized service.</h3>
        <h3 style={{ fontSize: '18px' }}>we ensure every detail is nothing short of perfect. Let’s create unforgettable moments together.</h3>
      </div>
      {
        session? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Welcome {session.user?.name}</div>: null
      }

      <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
       hover:bg-cyan-600 hover:text-white hover:border-transparent'
       onClick={(e)=>{e.stopPropagation(); router.push('/venue')}} >
        Select Your Venue NOW
      </button>
    </div>
  );
} 