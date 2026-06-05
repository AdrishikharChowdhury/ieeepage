import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-12 py-6 flex justify-between items-center shadow-xl fixed z-10 bg-white text-md'>
      <div className="flex items-center gap-2 font-bold text-4xl h-auto">
        <Image src='/logo.png' alt='logo' width={120} height={100} className='' />
        <p className='flex gap-2 items-center' ><span className="font-extrabold text-blue-700" >IEEE</span><span>STCET SB</span></p>
      </div>
      <ul className='flex gap-6 items-center'>
        <li>Home</li>
        <li>Our Story</li>
        <li>Timeline</li>
        <li>The Board</li>
        <li>Highlights</li>
      </ul>
      <li className='bg-blue-600 text-white px-6 py-3 rounded-md' >Stories</li>
    </nav>
  )
}

export default Navbar