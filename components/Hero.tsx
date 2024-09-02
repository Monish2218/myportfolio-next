"use client"
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="text-gray-800 dark:text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            <TypeAnimation
              sequence={[
                "Hi, I'm Monish Agrawal",
                1000,
                "I build things for the web",
                1000,
                "I learn new things everyday",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-8 leading-relaxed">
          I&apos;m a versatile software developer with a strong foundation in creating efficient, user-focused applications. Currently, as a freelancer, I&apos;m building and delivering scalable, user-friendly software solutions.
          </p>
          <div className="flex justify-center">
            <Link href="/projects" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              View My Work
            </Link>
            <Link href="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg dark:text-gray-800">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="hero"
            src="/heroImage1.webp"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero