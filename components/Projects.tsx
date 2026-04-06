import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Vision-Language Robot Navigation",
    description:
      "Multi-modal navigation via finetuned Seq2Seq T5 with GPT-3 and CLIP-driven scene annotation for autonomous object search in simulated environments.",
    tech: ["T5", "GPT-3", "CLIP", "PyTorch"],
  },
  {
    title: "NLP-Driven Stock Prediction",
    description:
      "DistilBERT sentiment analysis on real-time social media feeds for equity price movement forecasting, achieving 0.93 correlation on AAPL, TSLA, MSFT.",
    tech: ["DistilBERT", "HF-Transformers", "yfinance"],
  },
  {
    title: "COVID-19 Rapid Diagnostic System",
    description:
      "DenseNet-based chest X-ray classifier with gamma-corrected preprocessing for pneumonia and COVID-19 detection at 96.7% accuracy. Partnered with Gujarat Cancer Society.",
    tech: ["DenseNet", "OpenCV", "Flask", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Projects">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-14">
            <span className="dot-header" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="divider" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {projects.map((p) => (
            <ScrollReveal key={p.title}>
              <article className="glass rounded-xl p-6 h-full group flex flex-col">
                <h3 className="text-base font-bold mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider text-[var(--muted)] bg-[var(--accent-soft)] px-2.5 py-0.5 rounded border border-[var(--card-border)]">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
