import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { ab5, hcaptcha, mc, gogen } from '@/public'
import { SiPypi, SiNpm } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'

const Projects = () => {
  return (
    <section id="projects" className='max-w-[1440px] mx-auto lg:px-20 py-24'>
      <SectionTitle title='Projects' titleNumber='2.'/>
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* project 1 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://pypi.org/project/ab5' 
              target='_blank'>
              <div>
                <Image className='w-full h-full object-contain' src={ab5} alt={'ab5'}/>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='text-blue-500 text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Ab5 python package</h3>
              </div>
              <p className='bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md'>hot python package for making hot CLI apps</p>
              <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400'>
                <li>python</li>
                <li>pypi</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-blue-500 duration-300'
                href='https://pypi.org/project/ab5/'
                target='_blank'>
                  <SiPypi/>
                </a>
                <a 
                className='hover:text-blue-500 duration-300'
                href='https://files.pythonhosted.org/packages/b6/19/284022b4389e98b32dbb406c6d5570a38060effb8a56a7fe9fcc6d75007e/ab5-0.7.tar.gz'
                target='_blank'>
                  <BsCodeSlash/>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a 
              className='w-full xl:w-1/2 h-auto relative group'
              // href='https://pypi.org/project/ab5' 
              // target='_blank'
              >
              <div>
                <Image className='w-full h-full object-contain' src={hcaptcha} alt={'hcaptcha'}/>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10'>
              <div>
                <p className='text-blue-500 text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Hcaptcha solver</h3>
              </div>
              <p className='bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>Fast requests based hcaptcha solver with AI</p>
              <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400'>
                <li>python</li>
              </ul>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://github.com/xXA2005/minecraft-botter-with-proxy-support' 
              target='_blank'>
              <div>
                <Image className='w-full h-full object-contain' src={mc} alt={'mc'}/>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='text-blue-500 text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Minecraft Raider</h3>
              </div>
              <p className='bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md'>Raid minecraft servers with funny controllable robots</p>
              <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400'>
                <li>node.js</li>
                <li>mineflayer.js</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-blue-500 duration-300'
                href='https://www.npmjs.com/package/mineflayer'
                target='_blank'>
                  <SiNpm/>
                </a>
                <a 
                className='hover:text-blue-500 duration-300'
                href='https://github.com/xXA2005/minecraft-botter-with-proxy-support'
                target='_blank'>
                  <BsCodeSlash/>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 4 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              className='w-full xl:w-1/2 h-auto relative group'
              // href='https://github.com/xXA2005/minecraft-botter-with-proxy-support' 
              target='_blank'>
              <div>
                <Image className='w-full h-full object-contain' src={gogen} alt={'gogen'}/>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='text-blue-500 text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Golang discord account maker</h3>
              </div>
              <p className='bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md'>make discord accounts</p>
              <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400'>
                <li>golang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
