import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Hero from "@/components/sections/hero";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
