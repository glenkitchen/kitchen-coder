import BlurFade from "@/components/magicui/blur-fade";
import { siteConfig } from "@/data/config";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat?
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Send me a{" "}
              <Link
                href={siteConfig.contact.social.X.url}
                className="text-blue-500 hover:underline"
              >
                dm (Direct Message) on X
              </Link>{" "}
              and I will respond when I can.
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Or mail me on{" "}
              <Link
                href={siteConfig.contact.social.email.url}
                className="text-blue-500 hover:underline"
              >
                gmail
              </Link>
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
