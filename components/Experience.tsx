import ScrollReveal from "./ScrollReveal";
import { SiNasa } from "react-icons/si";

/* ── Brand logos — larger and more distinctive SVGs ── */

/* Apple — official Simple Icons path */
const AppleLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
);

/* AWS — official Simple Icons path */
const AWSLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.395 6.395 0 0 0-.862.279l-.287.128a.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415a3.64 3.64 0 0 1 1.005-.136c.183 0 .375.008.559.032.191.024.367.056.535.096.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.87.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>
);

/* TikTok — official Simple Icons path */
const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);

/* Infivolve — infinity symbol */
const InfivolveLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11">
    <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/>
  </svg>
);

const roles = [
  {
    company: "Apple",
    role: "Machine Learning Engineer",
    period: "Mar 2025 — Present",
    location: "Seattle, WA",
    color: "#818cf8",
    blurb: "Building high-performance LLM serving infrastructure — CUDA-accelerated runtime with custom kernels, operator fusion, adaptive batch scheduling, and KV-cache optimizations for Apple Foundation Models.",
    Logo: AppleLogo,
  },
  {
    company: "Amazon Web Services",
    role: "Software Engineer - AI/ML",
    period: "Jun 2024 — Mar 2025",
    location: "Seattle, WA",
    color: "#22d3ee",
    blurb: "Optimizing next-generation Trainium silicon for LLM workloads — kernel-level performance tuning, compute-communication overlap, and parameter-efficient alignment (SFT, DPO, RLHF) on custom AI accelerators.",
    Logo: AWSLogo,
  },
  {
    company: "TikTok (ByteDance)",
    role: "Research Engineer",
    period: "May 2022 — Jun 2024",
    location: "Bellevue, WA",
    color: "#34d399",
    blurb: "Optimized large language model training and serving at scale. Improved distributed training efficiency by 1.34x, designed sparse model architectures that ranked in the top 5% on standard benchmarks, built model compression pipelines, and accelerated production inference by 1.4x through compiler optimizations.",
    Logo: TikTokLogo,
  },
  {
    company: "NASA",
    subtitle: "School of Earth & Space Exploration, ASU",
    role: "Research Analyst",
    period: "Mar 2022 — Dec 2022",
    location: "Tempe, AZ",
    color: "#fbbf24",
    blurb: "Developed perception systems for planetary exploration — semantic SLAM with multi-modal feature fusion (RGB, depth, spectral) for terrain mapping, and zero-shot video inpainting for spacecraft landing trajectory analysis from Lunar ExoCam footage.",
    Logo: () => <SiNasa className="w-11 h-11" />,
  },
  {
    company: "Infivolve Inc",
    role: "Machine Learning Engineer",
    period: "Aug 2019 — Jul 2020",
    location: "Boston, MA",
    color: "#818cf8",
    blurb: "Built real-time sports analytics using Siamese network-based object tracking and segmentation for trajectory analysis across Basketball and Tennis, plus an AI fitness assistant deployed to Google PlayStore.",
    Logo: InfivolveLogo,
    href: "https://www.infivolve.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 section-alt" aria-label="Work experience">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-14">
            <span className="dot-header" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="divider" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {roles.map((r) => (
            <ScrollReveal key={`${r.company}-${r.period}`}>
              <article className="glass rounded-xl p-7 group">
                <div className="flex gap-6">
                  <div
                    className="shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      background: `color-mix(in srgb, ${r.color} 12%, transparent)`,
                      color: r.color,
                    }}
                  >
                    <r.Logo />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors leading-tight">
                          {"href" in r && r.href ? (
                            <a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {r.company}
                            </a>
                          ) : (
                            r.company
                          )}
                        </h3>
                        {"subtitle" in r && r.subtitle && (
                          <p className="text-xs text-[var(--muted)]">{r.subtitle}</p>
                        )}
                        <p className="text-sm font-medium mt-0.5" style={{ color: r.color }}>{r.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm text-[var(--muted)] whitespace-nowrap">{r.period}</p>
                        <p className="text-xs text-[var(--muted)]">{r.location}</p>
                      </div>
                    </div>
                    <p className="text-[15px] text-[var(--muted)] leading-relaxed">
                      {r.blurb}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
