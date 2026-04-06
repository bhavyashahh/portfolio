import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6" aria-label="About me">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="dot-header" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Who Am I?</h2>
            <div className="divider" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5 text-[17px] leading-[1.85] text-[var(--muted)]">
            <p>
              My work focuses on the systems that power modern deep learning
              — from low-level CUDA kernel development and high-performance model
              serving, to distributed training infrastructure and production-grade
              model optimization. I&apos;m driven by the challenge of making
              large-scale AI systems faster, leaner, and more reliable.
            </p>
            <p>
              I&apos;m drawn to problems at the intersection of model efficiency
              and systems design — inference optimization, model compression,
              and hardware-software codesign.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
