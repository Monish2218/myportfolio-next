"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Globe, Database, Cloud, GitBranch } from 'lucide-react'

type Skill = {
  name: string
  icon: React.ReactNode
  description: string
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code className="w-6 h-6" />,
    description: 'Crafting responsive and intuitive user interfaces with React, Next.js, and Tailwind CSS.'
  },
  {
    name: 'Backend Development',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Building robust server-side applications with Node.js, Express, and Python.'
  },
  {
    name: 'Full Stack Development',
    icon: <Globe className="w-6 h-6" />,
    description: 'Developing end-to-end web applications, from database design to deployment.'
  },
  {
    name: 'Database Management',
    icon: <Database className="w-6 h-6" />,
    description: 'Working with SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase.'
  },
  {
    name: 'Cloud Services',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Vercel.'
  },
  {
    name: 'DevOps',
    icon: <GitBranch className="w-6 h-6" />,
    description: 'Implementing CI/CD pipelines, containerization with Docker, and monistoring systems using tools like Prometheus and Grafana.'
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-card text-card-foreground rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
              <motion.div
                className="w-full h-1 bg-primary/20 mt-4 rounded-full overflow-hidden"
                initial={{ width: '0%' }}
                animate={{ width: hoveredSkill === skill.name ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full bg-primary rounded-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}