import { motion } from 'framer-motion'
import { SiVisualstudiocode, SiDocker, SiMongodb } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { DiLinux } from 'react-icons/di'

const tools = () => {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.1}}
                className='w-full'>
      <h3 className='flex gap-1 font-medium text-xl pb-4'>Tools and other things</h3>
      <ul className='flex gap-2 text-base flex-col'>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiVisualstudiocode/></span>Visual studio code</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiVisualstudiocode/></span>Visual studio</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiDocker/></span>Docker</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiMongodb/></span>MongoDB</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><FiGithub/></span>Git</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><DiLinux/></span>WSL</li>
      </ul>
    </motion.div>
  )
}

export default tools
