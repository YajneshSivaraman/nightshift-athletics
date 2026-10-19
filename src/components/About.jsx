
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// Store the brand manifesto separately so its copy is easy to update.
const manifesto = [
  "COMFORT",
  "IS A",
  "CHOICE.",
];

// Build a cinematic brand identity section.
export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0D0B0C] px-5 py-24 text-[#F1EDE8] sm:px-9 sm:py-32 lg:px-14"
    >
      {/* Large background lettering adds depth without extra images. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-24 select-none text-[clamp(7rem,22vw,20rem)] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.025]"
      >
        NS.
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section heading and brand identification. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex items-center justify-between gap-4 border-b border-white/15 pb-5 sm:mb-20"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D21E3B]">
            The NIGHTSHIFT Identity
          </span>

          <span className="font-mono text-[10px] text-white/40">
            EST. MMXXVI
          </span>
        </motion.div>

        {/* Two-column manifesto and athlete image. */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-10">
          {/* Manifesto typography. */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative z-10 md:col-span-7"
          >
            <p className="mb-7 text-[9px] uppercase tracking-[0.2em] text-white/45">
              001 — The mindset
            </p>

            <h2 className="text-[clamp(3.5rem,9.2vw,8.5rem)] font-black uppercase leading-[0.83] tracking-[-0.065em]">
              {manifesto.map((line, index) => (
                <span
                  key={line}
                  className={`block ${
                    index === 2 ? "text-[#D21E3B]" : "text-[#F1EDE8]"
                  }`}
                >
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-10 flex gap-5 sm:mt-14">
              {/* Crimson line creates a distinctive visual marker. */}
              <div className="w-1 shrink-0 bg-[#D21E3B]" />

              <div className="max-w-md">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em]">
                  Discipline after dark.
                </h3>

                <p className="text-sm leading-7 text-white/55">
                  NIGHTSHIFT is built around the work nobody sees. The quiet
                  repetitions, the uncomfortable decisions, and the commitment
                  to keep showing up when motivation disappears.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  We believe progress is earned through consistency. Not
                  attention. Not shortcuts. Just the work.
                </p>

                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[9px] font-bold tracking-[0.16em] transition-colors hover:border-[#D21E3B] hover:text-[#D21E3B]"
                >
                  BECOME PART OF IT
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tall photograph creates contrast with the typography. */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30, scale: 0.97 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#171416]">
              <img
                src="https://images.unsplash.com/photo-1637651684506-07e16fcf7b06?auto=format&fit=crop&w=1200&q=85"
                alt="Training space representing the NIGHTSHIFT mindset"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[65%] transition duration-700 hover:scale-105 hover:grayscale-[25%]"
              />

              {/* Darken the image and add a subtle crimson wash. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-[#A80720]/15 mix-blend-color" />

              <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.12em] text-white/70">
                FIG. 001 / THE WORK
              </span>

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9px] tracking-[0.17em] text-white/60">
                    NO AUDIENCE REQUIRED
                  </p>
                  <p className="mt-2 text-lg font-black uppercase tracking-[-0.04em]">
                    JUST SHOW UP.
                  </p>
                </div>

                <ArrowDownRight
                  size={22}
                  className="shrink-0 text-[#F05A70]"
                />
              </div>
            </div>

            {/* Small graphic marker outside the image frame. */}
            <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
              <span className="text-[8px] uppercase tracking-[0.17em] text-white/40">
                Strength / Identity / Intent
              </span>
              <span className="font-mono text-[10px] text-[#D21E3B]">
                01—NS
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom manifesto line closes the section. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/15 pt-5 sm:mt-32"
        >
          <p className="text-[clamp(1.4rem,4vw,3.5rem)] font-bold uppercase leading-tight tracking-[-0.045em]">
            The work is personal.
            <span className="text-[#D21E3B]"> The standard is yours.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
