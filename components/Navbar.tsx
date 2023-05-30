import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-gray-900 px-4'>
      <div className='h-full mx-auto max-w-screen-2xl py-1 flex items-center justify-between'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          <Image src='/gogobg.png' alt="gogobg" width={100} height={100}/>
        </motion.div>
        <div>
          <ul className='flex text-[17px] gap-7'>
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Home</li></Link> 
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Experince</li></Link> 
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Projects</li></Link> 
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Articles</li></Link> 
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Dox</li></Link> 
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><li>Contacts</li></Link> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
