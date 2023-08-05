import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { ab5, hcaptcha, mc, gogen, hcap } from "@/public";
import { SiPypi, SiNpm, SiTensorflow } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { TbBrandGolang } from "react-icons/tb";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto lg:px-20 py-24">
      <SectionTitle title="Projects" titleNumber="2." />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://pypi.org/project/ab5"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={ab5}
                  alt={"ab5"}
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="text-blue-500 text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Ab5 python package</h3>
              </div>
              <p className="bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md">
                hot python package for making hot CLI apps
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>python</li>
                <li>pypi</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://www.python.org/"
                  target="_blank"
                >
                  <DiPython />
                </a>
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://pypi.org/project/ab5/"
                  target="_blank"
                >
                  <SiPypi />
                </a>
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://files.pythonhosted.org/packages/b6/19/284022b4389e98b32dbb406c6d5570a38060effb8a56a7fe9fcc6d75007e/ab5-0.7.tar.gz"
                  target="_blank"
                >
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              // href='https://pypi.org/project/ab5'
              // target='_blank'
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={hcaptcha}
                  alt={"hcaptcha"}
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
              <div>
                <p className="text-blue-500 text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Hcaptcha solver</h3>
              </div>
              <p className="bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                Hcaptcha image recogniton api for my golang solver
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>python</li>
                <li>Tensorflow</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://www.tensorflow.org/"
                  target="_blank"
                >
                  <SiTensorflow />
                </a>
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://www.python.org/"
                  target="_blank"
                >
                  <DiPython />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/xXA2005/minecraft-botter-with-proxy-support"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={mc}
                  alt={"mc"}
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="text-blue-500 text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Minecraft Raider</h3>
              </div>
              <p className="bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md">
                Raid minecraft servers with funny controllable robots thru your
                terminal
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>node.js</li>
                <li>mineflayer.js</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://www.npmjs.com/package/mineflayer"
                  target="_blank"
                >
                  <SiNpm />
                </a>
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://github.com/xXA2005/minecraft-botter-with-proxy-support"
                  target="_blank"
                >
                  <BsCodeSlash />
                </a>
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://nodejs.org/"
                  target="_blank"
                >
                  <FaNodeJs />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 4 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              // href='https://github.com/xXA2005/minecraft-botter-with-proxy-support'
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={gogen}
                  alt={"gogen"}
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="text-blue-500 text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Discord token generator</h3>
              </div>
              <p className="bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md">
                make discord accounts
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>golang</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://go.dev/"
                  target="_blank"
                >
                  <TbBrandGolang />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              // href="https://github.com/xXA2005/minecraft-botter-with-proxy-support"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={hcap}
                  alt={"hcap"}
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="text-blue-500 text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Fast hcaptcha solver</h3>
              </div>
              <p className="bg-gray-800 text-sm md:text-base p-2 md:p-6 rounded-md">
                solves hcaptcha fr
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>golang</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://go.dev/"
                  target="_blank"
                >
                  <TbBrandGolang />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
