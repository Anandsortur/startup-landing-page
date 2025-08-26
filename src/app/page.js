import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonial />
      <CTA />
      <Contact />

    </main>
  );
}
