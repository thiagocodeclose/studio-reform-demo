// @ts-nocheck
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PhilosophyBar } from '@/components/PhilosophyBar';
import { ClassesSection } from '@/components/ClassesSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { PressSection } from '@/components/PressSection';
import { TeachersSection } from '@/components/TeachersSection';
import { GallerySection } from '@/components/GallerySection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PhilosophyBar />
      <ClassesSection />
      <ManifestoSection />
      <PressSection />
      <TeachersSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <AIChatWidget />
    </>
  );
}
