import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-gray-900 px-20'> 
    {/*  */}
      <div className='h-full mx-auto max-w-container py-1 flex items-center justify-between'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          <Image src='/favicon.ico' alt="ab5" width={100} height={100}/>
        </motion.div>
        <div className='hidden md:inline-flex items-center gap-7'>
          <ul className='flex text-[17px] gap-7'>
            <Link href="#home" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1}}>Home</motion.li></Link> 
            <Link href="#xp" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2}}>Experince</motion.li></Link> 
            <Link href="#projects" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.3}}>Projects</motion.li></Link> 
            <Link href="#articles" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4}}>Articles</motion.li></Link> 
            <Link href="#dox" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>Dox</motion.li></Link>
            <Link href="#thanks" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}}>Thanks</motion.li></Link>
          </ul>
        </div>
        {/* small icon section */}
        <div className='w-6 h-5 flex-col justify-between text-4xl text-green-600 cursor-pointer overflow-hidden md:hidden flex items-center group'>
          <span className='w-full h-[2px] bg-green-600 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-green-600 inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300 translate-x-3'></span>
          <span className='w-full h-[2px] bg-green-600 inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300 translate-x-1'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
