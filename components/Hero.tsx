"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Hero overlay — dark in dark mode, light in light mode */}
      <div
        className="absolute inset-0 hero-bg opacity-60 dark:opacity-60"
        aria-hidden="true"
      />
      {/* Light mode: solid tinted background so text is readable */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/50 to-cyan-50/40 dark:opacity-0 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — Profile Card */}
          <ScrollReveal>
            <div className="relative w-full lg:w-[320px] shrink-0">
              {/* Card glow effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-teal-500/15 blur-sm" aria-hidden="true" />
              <div className="relative glass rounded-2xl p-8 border border-[var(--card-border)] overflow-hidden">
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/[0.05] to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/[0.04] to-transparent" aria-hidden="true" />

                {/* Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-teal-500/15 blur-xl" aria-hidden="true" />
                    <div className="photo-ring relative">
                      <Image
                        src="public/profile.jpg"
                        alt="Bhavya Nirav Shah"
                        width={180}
                        height={180}
                        className="rounded-full object-cover w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-5">
                  <h1 className="text-2xl font-bold tracking-tight mb-1">
                    Bhavya Nirav Shah
                  </h1>
                  <p className="text-sm text-[var(--accent)] font-medium">
                    Machine Learning Engineer
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mb-5" aria-hidden="true" />

                {/* Details */}
                <div className="space-y-3 mb-6 text-sm text-[var(--muted)]">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Zurich, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>ML Systems &amp; Infrastructure</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 mb-4">
                  <a
                    href="https://github.com/bhavyashahh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[var(--accent-soft)] text-[var(--fg)] text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Follow on GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bhavyanshah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[var(--card-border)] text-[var(--muted)] text-sm font-medium hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Icon row: Scholar + Email */}
                <div className="flex justify-center gap-3">
                  <a
                    href="https://scholar.google.com/citations?user=YL634VAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-200"
                    aria-label="Google Scholar"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:shahbhavyan12@gmail.com"
                    className="p-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-200"
                    aria-label="Email"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Introduction */}
          <div className="flex-1 lg:pt-4 flex flex-col justify-center">
            <ScrollReveal>
              <p className="text-[var(--muted)] dark:text-white/50 text-base leading-[1.85] mb-4 max-w-xl">
                My work focuses on the systems that power modern deep learning
                — from low-level CUDA kernel development and high-performance
                model serving, to distributed training infrastructure and
                production-grade model optimization. I&apos;m driven by the
                challenge of making large-scale AI systems faster, leaner,
                and more reliable.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[var(--muted)] dark:text-white/45 text-base leading-[1.85] mb-8 max-w-xl">
                I&apos;m drawn to problems at the intersection of model
                efficiency and systems design — inference optimization,
                model compression, and hardware-software codesign.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-wrap gap-2.5">
                {["LLM Inference", "Distributed Training", "CUDA Programming", "ML Systems", "Model Optimization", "Computer Vision", "NLP"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3.5 py-1.5 rounded-full border border-[var(--card-border)] text-[var(--muted)] bg-[var(--accent-soft)] dark:border-white/10 dark:text-white/40 dark:bg-white/[0.04] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-4 h-4 text-[var(--muted)] dark:text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
