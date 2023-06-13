import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Langs from './exp/Langs'
import Frameworks from './exp/Frameworks'
import Tools from './exp/Tools'

const Xp = () => {
  const [openLangs, setOpenLangs] = useState(true)
  const [openFrameworks, setOpenFrameworks] = useState(false)
  const [openTools, setOpenTools] = useState(false)
  const handleLangs = () => {
    setOpenLangs(true)
    setOpenFrameworks(false)
    setOpenTools(false)
  }
  const handleFrameworks = () => {
    setOpenLangs(false)
    setOpenFrameworks(true)
    setOpenTools(false)
  }
  const handleTools = () => {
    setOpenLangs(false)
    setOpenFrameworks(false)
    setOpenTools(true)
  }
  return (
    <section className='mx-auto py-10 lg:py-24 px-4 max-w-[768px]' id='xp'>
        <SectionTitle title='Experince' titleNumber='1.'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleLangs} className={`${openLangs ? "border-l-blue-500 text-blue-500" : "border-l-[#112240] text-gray-400"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>Langs</li>
                <li onClick={handleFrameworks} className={`${openFrameworks ? "border-l-blue-500 text-blue-500" : "border-l-[#112240] text-gray-400"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>Frameworks</li>
                <li onClick={handleTools} className={`${openTools ? "border-l-blue-500 text-blue-500" : "border-l-[#112240] text-gray-400"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>Tools</li>
                {/* <li onClick={handleAchivements} className='border-l-[#112240] text-gray-400 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>Achivements</li> */}
            </ul>
            {openLangs && <Langs/>}
            {openFrameworks && <Frameworks/>}
            {openTools && <Tools/>}
        </div>
    </section>
  )
}

export default Xp
