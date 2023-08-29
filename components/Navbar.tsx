import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div>
        <div className="flex gap-3 bg-slate-300 text-center justify-center">
            <Image src='/logo.png'
            alt='logo'
            width={120}
            height={60}
            />
            <div className="flex gap-5">
                <h2>Home</h2>
                <h2>History</h2>
                <h2>Help</h2>
            </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar