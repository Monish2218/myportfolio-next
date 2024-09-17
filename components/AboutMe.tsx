import Image from 'next/image'
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
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

          {/* Content Column */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              About Me
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Hello! I&apos;m [Your Name], a passionate software developer with [X] years of experience in creating robust and scalable web applications. My journey in tech started [brief background], and since then, I&apos;ve been constantly learning and evolving in this ever-changing field.
            </p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I specialize in [Your Main Skills/Technologies], and I&apos;m always excited to take on new challenges that push me out of my comfort zone. When I&apos;m not coding, you can find me [Your Hobbies/Interests].
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <FaCode className="text-3xl text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">React, Next.js, Tailwind</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaServer className="text-3xl text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaLaptopCode className="text-3xl text-purple-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Other</h3>
                  <p className="text-gray-600 dark:text-gray-300">TypeScript, GraphQL, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe