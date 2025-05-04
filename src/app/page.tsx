import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
// import { ProjectsSection } from '@/components/sections/projects-section'; // Keep commented out or remove
import { ProjectsCarousel } from '@/components/sections/projects-carousel'; // Ensure this is imported
import { PublicationsSection } from '@/components/sections/publications-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */} {/* Keep commented out or remove */}
        <ProjectsCarousel /> {/* Ensure this is used */}
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
