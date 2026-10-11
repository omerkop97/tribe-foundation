import { Button } from "./Button";
import { Reveal } from "./Reveal";

type SimpleCtaProps = {
  heading: string;
  body: string;
};

export function SimpleCta({ heading, body }: SimpleCtaProps) {
  return (
    <section className="bg-forest text-offwhite">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="font-display max-w-lg text-3xl leading-[0.95] md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-offwhite/70">{body}</p>
        </div>
        <Button href="/#contact" variant="primary" className="shrink-0">
          Samen impact maken →
        </Button>
      </Reveal>
    </section>
  );
}
