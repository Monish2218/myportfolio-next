import Hero from "@/components/Hero";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactMe from "@/components/contact-section";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactMe />
    </>
  );
}
