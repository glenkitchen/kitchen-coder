import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AppTabs() {
  return (
    <nav className="mb-8">
      <Tabs defaultValue="/" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="/" asChild>
            <Link href="/">Home</Link>
          </TabsTrigger>
          <TabsTrigger value="/cv" asChild>
            <Link href="/cv">CV</Link>
          </TabsTrigger>
          <TabsTrigger value="/cv-pdf" asChild>
            <Link href="/cv-pdf">CV - PDF</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
}
