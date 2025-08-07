import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import CommunitySection from "@/components/community-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes("#")) {
        e.preventDefault();
        const elementId = target.href.split("#")[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <div className="min-h-screen bg-neutral">
      <Navigation />
      <main>
        <HeroSection />
        <div className="bg-white py-6 shadow-lg">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center text-sm md:text-base">
              <div className="flex items-center mb-2 md:mb-0 mr-6">
                <i className="fas fa-phone text-primary mr-2"></i>
                <span className="text-dark">+91 9789296263</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0 mr-6">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a href="mailto:sugalechristo2001@gmail.com" className="text-dark hover:text-secondary transition-colors">
                  sugalechristo2001@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-2 md:mb-0 mr-6">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                <span className="text-dark">Colachel, Kanyakumari District, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar text-primary mr-2"></i>
                <span className="text-dark">DOB: 03/11/2001</span>
              </div>
            </div>
          </div>
        </div>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
