import { Icons } from "@/components/icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t py-2">
      <p className="text-sm tracking-tight text-foreground">
        Copyright © {new Date().getFullYear()}{" "}
        <Link href="/" className="cursor-pointer">
          {siteConfig.name}
        </Link>{" "}
        - {siteConfig.footer}
      </p>
      <br />
      <p className="text-sm tracking-tight text-foreground">
        Based on the Magic UI Pro
        <Link
          href="https://pro.magicui.design/docs/templates/portfolio"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Portfolio Template
        </Link>
      </p>
    </footer>
  );
}
