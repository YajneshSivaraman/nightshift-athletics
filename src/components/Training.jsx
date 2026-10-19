
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// Keep the training categories in data so they are easy to edit.
const programs = [
  {
    number: "01",
    title: "STRENGTH",
    subtitle: "BUILD YOUR BASE",
    description:
      "Develop raw strength, controlled movement, and the discipline to push beyond your limits.",
    image:
       "https://unsplash.com/photos/QkK7NtsPrJM/download?force=true",
   className: "md:col-span-6",
  },
  {
    number: "02",
    title: "CONDITIONING",
    subtitle: "OWN YOUR PACE",
    description:
      "Build stamina, sharpen your focus, and stay relentless when the pressure rises.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
  className: "md:col-span-6",
  },
  {
    number: "03",
    title: "PERFORMANCE",
    subtitle: "MOVE WITH INTENT",
    description:
      "Train for power, speed, and the confidence to perform when it matters.                   ",
    
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-8 md:col-start-3",
  },
];

// Reusable program section with reduced-motion accessibility.
export default function Training() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#080809] px-5 py-24 text-[#F1EDE8] sm:px-9 sm:py-32 lg:px-14"
    >
      {/* Add a restrained crimson glow behind the editorial layout. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#A80720]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section introduction and oversized heading. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-white/15 pb-8 sm:mb-24"
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D21E3B]">
              The Training Division
            </span>
            <span className="font-mono text-[10px] text-white/40">
              NS—001 / 003
            </span>
          </div>

          <h2 className="max-w-5xl text-[clamp(3.2rem,9vw,8.5rem)] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            YOUR WORK.
            <span className="block text-[#D21E3B]">YOUR RULES.</span>
          </h2>

          <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <p className="max-w-md text-sm leading-7 text-white/55">
              No shortcuts. No spectators. Find your discipline and build a
              stronger version of yourself, one session at a time.
            </p>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#D21E3B] pb-2 text-[10px] font-bold tracking-[0.16em] transition-colors hover:text-[#D21E3B]"
            >
              FIND YOUR PROGRAM
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Offset image compositions create an editorial rhythm. */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
          {programs.map((program, index) => (
            <motion.article
              key={program.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 36 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className={`group min-w-0 ${program.className}`}
            >
              {/* Image frame with restrained hover movement. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#171416] sm:aspect-[5/3]">
                <img
                  src={program.image}
                  alt={`${program.title.toLowerCase()} training`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[55%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Crimson tint becomes more visible on interaction. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-[#080809]/10" />
                <div className="absolute inset-0 bg-[#A80720]/10 mix-blend-color" />

                <span className="absolute left-5 top-5 font-mono text-xs text-white/75">
                  [{program.number}]
                </span>

                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 transition duration-300 group-hover:border-[#D21E3B] group-hover:bg-[#D21E3B]">
                  <ArrowUpRight size={17} />
                </span>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-[#F05A70]">
                    {program.subtitle}
                  </p>
                  <h3 className="text-[clamp(2rem,5vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.045em]">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Supporting copy sits below the image, not inside a card. */}
              <div className="flex gap-5 border-b border-white/15 py-5">
                <span className="mt-1 font-mono text-[10px] text-[#D21E3B]">
                  {program.number}
                </span>

                <div className="flex-1">
                 <p className="min-h-[3rem] max-w-lg text-sm leading-6 text-white/55">
                    {program.description}
                  </p>
                </div>

                <ArrowDownRight
                  size={17}
                  className="mt-1 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </div>
            </motion.article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
