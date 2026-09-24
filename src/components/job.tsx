import { calculateDuration } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JobProps {
  company: string;
  title: string;
  period: string;
  start?: string;
  end?: string;
  logoUrl?: string;
  href?: string;
  open?: boolean;
  children: React.ReactNode;
}

export default function Job({
  company,
  title,
  period,
  start,
  end,
  logoUrl,
  href,
  open,
  children,
}: JobProps) {
  return (
    <details open={open} className="group border-b py-4 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-4">
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90 print:hidden" />
          {logoUrl && (
            <Image
              src={logoUrl}
              alt={company}
              width={48}
              height={48}
              className="object-contain"
            />
          )}
          <div>
            <div className="font-semibold">
              {href ? (
                <Link href={href} className="hover:underline">
                  {company}
                </Link>
              ) : (
                company
              )}
            </div>
            <div className="text-sm text-muted-foreground">{title}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">{period}</div>
          {start && (
            <div className="text-sm font-medium text-muted-foreground">
              {calculateDuration(start, end)}
            </div>
          )}
        </div>
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  );
}
