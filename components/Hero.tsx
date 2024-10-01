import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { SiLeetcode, SiX } from 'react-icons/si'
import HeroH1 from './HeroH1'

const Hero = () => {
  return (
    <section id='about' className="relative text-gray-800 dark:text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-dark.png"
          alt="Background"
          fill
          className="object-cover opacity-10 dark:opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-5 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Column */}
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="title-font text-4xl md:text-5xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              <HeroH1 />
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              I&apos;m passionate about building innovative web applications and solving complex problems. With expertise in Full Stack Development, I create efficient, scalable, and user-friendly solutions.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="#projects" className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                View My Work
              </Link>
              <Link href="#contact" className="ml-4 inline-flex text-gray-800 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Contact Me
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex mt-8 space-x-6">
              <a href="https://github.com/Monish2218" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/monish-agrawal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/Agrawalmonish1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <SiX size={24} />
              </a>
              <a href="https://leetcode.com/luvoncode" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <SiLeetcode size={24} />
              </a>
              <a href="https://discordapp.com/users/luvoncode" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
              <Image
                src="/devImage2.webp"
                alt="About Me"
                fill
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero