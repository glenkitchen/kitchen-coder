import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
