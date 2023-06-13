import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { motion } from 'framer-motion'

type RepoCardProps = {
    title: string;
    description: string;
    stars: number;
    lang: string;
    url: string;
};


const RepoCard = ({ title, description, stars, lang, url }:RepoCardProps) => {
return (
    <motion.a
    initial={{x: -10,y:-10, opacity:0}} animate={{x:0,y:0, opacity:1}} transition={{duration:1}}
     href={url} target='_blank'>
        <div className='w-full h-80 rounded-lg bg-gray-900 p-7 flex flex-col hover:-translate-y-2 transition-transform duration-300 group justify-between'>
            <h2 className="text-lg font-semibold group-hover:text-blue-500">{title}</h2>
            <p className="text-gray-600 self-center">{description}</p>
            <div className="flex text-gray-500 justify-between">
                <span className='flex gap-2'>{stars}<AiOutlineStar/></span>
                <span>{lang}</span>
            </div>
        </div>
    </motion.a>
    );
};


export default RepoCard