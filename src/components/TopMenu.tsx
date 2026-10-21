import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import Link from "next/link"

export default async function TopMenu () {

  const session = await getServerSession(authOptions)

  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse">
      <Image src={'/img/logo.png'} alt="logo" className="h-full w-auto" width={0} height={0} sizes="100vh"/>
      <TopMenuItem title="Booking" pageRef="/booking"/>

      <div className="flex flex-row absolute left-0 h-full items-center gap-8 px-4">
        {
        session? <Link href="/api/auth/signout">
          <div className="flex items-center px-2 text-cyan-600 text-sm">
            Sign-Out of {session.user?.name}
          </div>
        </Link>
        : <Link href="/api/auth/signin">
            <div className="flex items-center px-2 text-cyan-600 text-sm">
              Sign-In
            </div>
        </Link>
        }
        <TopMenuItem title="My Booking" pageRef="/mybooking"/>
      </div>
      
  
    </div>
  )
}