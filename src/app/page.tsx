import Link from "next/link";
import PrintExpand from "@/components/print-expand";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work.mdx";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <PrintExpand />
      <div className="space-y-4 -mb-4">
        <Hero />
        <ul className="text-sm text-muted-foreground">
          <li>Email: glen.kitchen@gmail.com</li>
          <li>Cell: +27 83 776 8377</li>
          <li>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/glen-kitchen-12588962/"
              className="hover:underline"
            >
              linkedin.com/in/glen-kitchen-12588962
            </Link>
          </li>
          <li>Location: KZN, South Africa</li>
          <li>Availability: South Africa and UK (British passport)</li>
        </ul>
      </div>
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
    </main>
  );
}
