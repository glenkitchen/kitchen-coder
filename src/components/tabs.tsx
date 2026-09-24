import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AppTabs() {
  return (
    <nav className="mb-8 print:hidden">
      <Tabs defaultValue="/" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="/" asChild>
            <Link href="/">CV</Link>
          </TabsTrigger>
          <TabsTrigger value="/cv-pdf" asChild>
            <Link href="/cv-pdf">PDF</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
}
