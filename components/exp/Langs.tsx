import { motion } from 'framer-motion'

const langs = () => {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.1}}
                className='w-full'>
      <h3 className='flex gap-1 font-medium text-xl'>Programming languages</h3>
      <ul className='flex gap-2 text-base'>
        <li><span className='text-blue-500'>1. </span>something hot</li>
      </ul>
    </motion.div>
  )
}

export default langs
