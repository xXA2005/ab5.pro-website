import React from 'react'

interface Props{
    title:string;
    titleNumber:string;
}


const SectionTitle = ({title,titleNumber}: Props) => {
  return (
    <h2 className='text-2xl font-semibold flex items-center'>
      <span className='text-base md:text-lg text-blue-500 mr-2'>{titleNumber}</span>{title}
      <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6'></span>
    </h2>
  )
}

export default SectionTitle
