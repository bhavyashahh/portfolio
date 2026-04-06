import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const education = [
  {
    school: "Arizona State University",
    college: "Ira A. Fulton Schools of Engineering",
    degree: "M.S. Computer Science",
    period: "Aug 2021 — Dec 2022",
    location: "Tempe, AZ",
    color: "#8C1D40",
    logo: "public/asu-logo.png",
  },
  {
    school: "Nirma University",
    college: "Institute of Technology",
    degree: "B.Tech Computer Engineering",
    period: "Aug 2017 — May 2021",
    location: "Ahmedabad, India",
    color: "#1a5276",
    logo: "public/nirma-logo.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 section-alt" aria-label="Education">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-14">
            <span className="dot-header" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="divider" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 stagger">
          {education.map((e) => (
            <ScrollReveal key={e.school}>
              <article className="glass rounded-xl p-7 h-full group">
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      background: `color-mix(in srgb, ${e.color} 8%, transparent)`,
                    }}
                  >
                    <Image
                      src={e.logo}
                      alt={`${e.school} logo`}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors leading-tight mb-0.5">
                      {e.school}
                    </h3>
                    <p className="text-sm text-[var(--accent)] font-medium">{e.degree}</p>
                    <p className="text-xs text-[var(--muted)] mb-2">{e.college}</p>
                    <p className="text-xs text-[var(--muted)]">{e.period} &middot; {e.location}</p>
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
