// @ts-nocheck
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PhilosophyBar } from '@/components/PhilosophyBar';
import { ClassesSection } from '@/components/ClassesSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { TeachersSection } from '@/components/TeachersSection';
import { GallerySection } from '@/components/GallerySection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PhilosophyBar />
      <ClassesSection />
      <ManifestoSection />
      <TeachersSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
