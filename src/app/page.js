import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from '@/components/About'

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Features />
      <About />
    </main>
  );
}
