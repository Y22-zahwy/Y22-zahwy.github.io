import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import siteMetadata from "@/data/site-metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.name} | ${siteMetadata.title}`,
  description: siteMetadata.description,
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
