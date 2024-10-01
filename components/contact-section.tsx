import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaDiscord, FaMailBulk } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

export default function ContactMe() {
  return (
    <section id='contact' className="w-full py-12 md:py-24 lg:py-22 bg-background dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground dark:text-white">
            Connect with me on Socials
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <Link href="https://twitter.com/Agrawalmonish1" target="_blank" rel="noopener noreferrer">
                <SiX className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <Link href="https://linkedin.com/in/monish-agrawal" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <Link href="https://github.com/Monish2218" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="w-12 h-12">
              <Link href="https://discordapp.com/users/luvoncode" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <Button asChild variant="link" className="text-base">
              <Link href="mailto:agrawalmonish13@gmail.com">
                <FaMailBulk className="mr-2 h-4 w-4" />
                or drop a mail at agrawalmonish13@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}