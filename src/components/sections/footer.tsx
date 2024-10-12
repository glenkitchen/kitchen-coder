import { Icons } from "@/components/icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t py-2">
      <span className="text-sm tracking-tight text-foreground">
        Copyright © {new Date().getFullYear()}{" "}
        <Link href="/" className="cursor-pointer">
          {siteConfig.name}
        </Link>{" "}
        - {siteConfig.footer}
      </span>
    </footer>
  );
}
