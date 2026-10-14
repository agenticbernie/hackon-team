import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { TechStackSection } from "@/components/site/TechStackSection";
import { AboutTeamSection } from "@/components/site/AboutTeamSection";
import { EcosystemSection } from "@/components/site/EcosystemSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <TechStackSection />
        <AboutTeamSection />
        <EcosystemSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
