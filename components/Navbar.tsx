import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { TbBrandMatrix } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-gray-900 px-4">
      {/*  */}
      <div className="max-w-[1440px] h-full mx-auto py-1 flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/favicon.ico"
            alt="ab5"
            width={100}
            height={100}
            className="object-contain"
          />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="flex text-[17px] gap-7">
            <Link
              onClick={handleScroll}
              href="#home"
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#xp"
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#projects"
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Projects
              </motion.li>
            </Link>
            {/* <Link onClick={handleScroll} href="#articles" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4}}>Articles</motion.li></Link>  */}
            {/* <Link onClick={handleScroll} href="#thanks" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: -10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4}}>Thanks</motion.li></Link> */}
            <Link
              href="/shop"
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 font-medium"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                shop
              </motion.li>
            </Link>
          </ul>
        </div>
        {/* small icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex-col justify-between text-4xl text-blue-500 cursor-pointer overflow-hidden md:hidden flex items-center group"
        >
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300 translate-x-3"></span>
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300 translate-x-1"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-gray-800 flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-blue-500 cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex text-[17px] gap-7 flex-col">
                  <Link
                    onClick={handleScroll}
                    href="#home"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#xp"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#projects"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  {/* <Link onClick={handleScroll} href="#articles" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4,delay:0.1, ease:'easeIn'}}>Articles</motion.li></Link>  */}
                  {/* <Link onClick={handleScroll} href="#thanks" className='flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 nav-link font-medium'><motion.li initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4,delay:0.1, ease:'easeIn'}}>Thanks</motion.li></Link> */}
                  <Link
                    href="/shop"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer duration-300 font-medium"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
                    >
                      shop
                    </motion.li>
                  </Link>
                </ul>
                <div>
                  <div className="flex gap-4 pb-4">
                    <a href="https://github.com/xXA2005" target="_blank">
                      <span className="w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <FiGithub />
                      </span>
                    </a>
                    <a
                      href="https://discordlookup.com/user/1161604278083911711"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <RxDiscordLogo />
                      </span>
                    </a>
                    <a href="https://t.me/Ab5fr" target="_blank">
                      <span className="w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <FaTelegramPlane />
                      </span>
                    </a>

                    <a
                      href="https://matrix.to/#/@0xab5:matrix.org"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandMatrix />
                      </span>
                    </a>
                    <a href="mailto:ab5@terrorist.services" target="_blank">
                      <span className="w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <AiOutlineMail />
                      </span>
                    </a>
                  </div>
                  <div className="flex gap-4">
                    {/*       <a href='https://www.youtube.com/@ab.5' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <AiOutlineYoutube/>
            </span>
        </a>
        <a href='https://www.instagram.com/0xab5/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <AiOutlineInstagram/>
            </span>
        </a>
        <a href='https://www.tiktok.com/@xmon' target='_blank'>
            <span className='w-10 h-10 text-xl bg-gray-900 rounded-full inline-flex items-center justify-center hover:text-indigo-300 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <BsTiktok/>
            </span>
        </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
