import BlurFade from "@/components/magicui/blur-fade";
import { siteConfig } from "@/data/config";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">{siteConfig.about.title}</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {siteConfig.about.text}
        </Markdown>
      </BlurFade>
    </section>
  );
}
