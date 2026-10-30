import HeroSection from '@/components/sections/HeroSection';
import ValueSection from '@/components/sections/ValueSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <ValueSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <ServicesSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <ProjectsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <ProductsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <AboutSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      <ContactSection />
    </>
  );
}
