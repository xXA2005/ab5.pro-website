import React from 'react'
import SectionTitle from './SectionTitle'
import Langs from './exp/Langs'

const Xp = () => {
  return (
    <section className='mx-auto py-10 lg:py-24 px-4 max-w-[768px]' id='xp'>
        <SectionTitle title='Experince' titleNumber='1.'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li className='border-l-[#112240] text-gray-400 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>Langs</li>
                <li className='border-l-[#112240] text-gray-400 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>Frameworks</li>
                <li className='border-l-[#112240] text-gray-400 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>Tools</li>
                <li className='border-l-[#112240] text-gray-400 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>Achivements</li>
            </ul>
            <Langs/>
        </div>
    </section>
  )
}

export default Xp
