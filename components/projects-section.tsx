import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A revolutionary app that does amazing things with AI and blockchain.",
    image: "/bg-dark.png?height=200&width=300",
    tags: ["React", "Node.js", "AI", "Blockchain"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Beta Dashboard",
    description: "Powerful analytics dashboard with real-time data visualization.",
    image: "/bg-dark.png?height=200&width=300",
    tags: ["Vue.js", "D3.js", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Gamma Mobile App",
    description: "Cross-platform mobile app for productivity and task management.",
    image: "/bg-dark.png?height=200&width=300",
    tags: ["React Native", "Redux", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/25 hover:-translate-y-1">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}