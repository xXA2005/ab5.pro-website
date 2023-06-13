import { motion } from 'framer-motion'
import { DiPython } from 'react-icons/di'
import { TbBrandGolang } from 'react-icons/tb'
import { DiJavascript1 } from 'react-icons/di'

const langs = () => {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.1}}
                className='w-full'>
      <h3 className='flex gap-1 font-medium text-xl pb-4'>Programming Languages</h3>
      <ul className='flex gap-2 text-base flex-col'>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><DiPython/></span>Python</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><TbBrandGolang/></span>Go</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><DiJavascript1/></span>Javascript</li>
      </ul>
    </motion.div>
  )
}

export default langs
