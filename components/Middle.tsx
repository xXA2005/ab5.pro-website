import { motion } from 'framer-motion'
 
const Middle = () => {
  return <section id='home' className='max-w-[1140px] mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4'>
    <motion.div initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.7}}
    className='text-4xl lg:text-6xl font-semibold'>hi im <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Ab.5</span></motion.div>
    <motion.span initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.8}}
    className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl font-semibold'>best codar</motion.span>
    <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.9}}>pls hire me 🙏</motion.p>
  </section>
}

export default Middle
