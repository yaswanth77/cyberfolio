import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CyberBackground } from '@/components/cyber-background';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { MethodologySection } from '@/components/sections/methodology-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AiSecuritySection } from '@/components/sections/ai-security-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ResearchSection } from '@/components/sections/research-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <CyberBackground />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <MethodologySection />
        <ProjectsSection />
        <AiSecuritySection />
        <SkillsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
