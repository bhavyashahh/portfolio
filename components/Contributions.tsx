import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

/* Icons for organizations */
const PyTorchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.47-4.47.744-.744 2.058-2.058-2.044-1.523zm4.108 4.394a1.258 1.258 0 00-1.258 1.258 1.258 1.258 0 001.258 1.258 1.258 1.258 0 001.258-1.258 1.258 1.258 0 00-1.258-1.258z"/></svg>
);
/* MLSys — stylized gear/wrench icon */
const MLSysIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
);
/* HackMIT — uses image logo */
const PaperIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
);

interface Entry {
  title: string;
  subtitle: string;
  detail?: string;
  href?: string;
  Icon?: () => React.JSX.Element;
  logo?: string;
  color: string;
}

const entries: Entry[] = [
  {
    title: "MLSys 2026",
    subtitle: "External Review Committee",
    detail: "Reviewing submissions on ML systems, compilers, and infrastructure",
    href: "https://mlsys.org/",
    Icon: MLSysIcon,
    color: "#818cf8",
  },
  {
    title: "PyTorch Conference",
    subtitle: "Poster Presentation — 2025",
    detail: "Efficient LLM Inference Via Model Sparsity",
    href: "https://static.sched.com/hosted_files/pytorchconference/76/Efficient%20LLM%20Inference%20Via%20Model%20Sparsity%20-%20Bhavya%20Shah%2C%20Apple%20%26%20Krutarth%20Bhatt%2C%20Amazon%20Web%20Services.pptx.pdf",
    Icon: PyTorchIcon,
    color: "#ee4c2c",
  },
  {
    title: "HackMIT 2023 & 2024",
    subtitle: "Judge & Mentor — AI/ML Track",
    detail: "Evaluated and mentored student teams building AI-powered projects",
    logo: "/portfolio/hackmit-logo.png",
    color: "#34d399",
  },
  {
    title: "EMOTIONCAPS — Facial Emotion Recognition Using Capsules",
    subtitle: "ICONIP 2020 — First Author",
    href: "https://link.springer.com/chapter/10.1007/978-3-030-63820-7_45",
    Icon: PaperIcon,
    color: "#22d3ee",
  },
  {
    title: "Facial Emotion Based Review Accumulation System",
    subtitle: "IEEE INDICON 2020 — First Author",
    href: "https://ieeexplore.ieee.org/abstract/document/9342467/",
    Icon: PaperIcon,
    color: "#22d3ee",
  },
];

export default function Contributions() {
  return (
    <section id="contributions" className="relative py-28 px-6" aria-label="Research and contributions">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-14">
            <span className="dot-header" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Research &amp; Contributions</h2>
            <div className="divider" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="space-y-5 stagger">
          {entries.map((e) => {
            const inner = (
              <div className="flex gap-5 items-start">
                <div
                  className="shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 overflow-hidden"
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    background: `color-mix(in srgb, ${e.color} 12%, transparent)`,
                    color: e.color,
                  }}
                >
                  {e.logo ? (
                    <Image src={e.logo} alt={e.title} width={40} height={40} className="object-contain" />
                  ) : e.Icon ? (
                    <e.Icon />
                  ) : null}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold group-hover:text-[var(--accent)] transition-colors leading-snug">
                        {e.title}
                      </h3>
                      <p className="text-sm text-[var(--accent)] font-medium mt-0.5">{e.subtitle}</p>
                    </div>
                    {e.href && (
                      <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-all shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  {e.detail && (
                    <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{e.detail}</p>
                  )}
                </div>
              </div>
            );

            return (
              <ScrollReveal key={e.title}>
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-6 block group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="glass rounded-xl p-6 group">
                    {inner}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
