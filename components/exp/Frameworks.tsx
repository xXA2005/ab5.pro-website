import { motion } from 'framer-motion'
import { SiNextdotjs, SiExpress, SiFlask, SiDotnet, SiElectron } from 'react-icons/si'
import { DiReact, DiPython } from 'react-icons/di'


const frameworks = () => {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.1}}
                className='w-full'>
      <h3 className='flex gap-1 font-medium text-xl pb-4'>Frameworks</h3>
      <ul className='flex gap-2 text-base flex-col'>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiNextdotjs/></span>Next.js</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><DiReact/></span>React.js</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiExpress/></span>Express.js</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiElectron/></span>Electron.js</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiFlask/></span>Flask.py</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><DiPython/></span>TkInter.py</li>
        <li className='flex flex-row gap-1'><span className='text-blue-500'><SiDotnet/></span>.NET</li>
      </ul>
    </motion.div>
  )
}

export default frameworks
