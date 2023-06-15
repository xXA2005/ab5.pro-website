import { AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { TbBrandMatrix } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import { RxDiscordLogo } from 'react-icons/rx'



const LeftContacts = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-white'>
      <div className='flex flex-col gap-4'>
        <a href='https://github.com/xXA2005' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <FiGithub/>
            </span>
        </a>
      <a href='https://discordlookup.com/user/1105503842763800597' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <RxDiscordLogo/>
            </span>
        </a>
        <a href='https://t.me/Ab5fr' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <FaTelegramPlane/>
            </span>
        </a>
        
        <a href='https://matrix.to/#/@0xab5:matrix.org' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandMatrix/>
            </span>
        </a>
        <a href='mailto:ab5@terrorist.services' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <AiOutlineMail/>
            </span>
        </a>
{/*         <a href='https://www.youtube.com/@ab.5' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <AiOutlineYoutube/>
            </span>
        </a> */}
{/*         <a href='https://www.instagram.com/0xab5/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <AiOutlineInstagram/>
            </span>
        </a> */}
{/*         <a href='https://www.tiktok.com/@xmon' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <BsTiktok/>
            </span>
        </a> */}
      </div>
      <div className='w-[2px] h-32 bg-gray-700'></div>
    </div>
  )
}

export default LeftContacts
