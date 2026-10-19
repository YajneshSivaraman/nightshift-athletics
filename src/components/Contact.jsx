
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";
// Final conversion section for the NIGHTSHIFT ATHLETICS campaign.
export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080809] px-5 py-24 text-[#F1EDE8] sm:px-10 sm:py-32 lg:px-16"
    >
      {/* Large decorative background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-12 select-none text-[22vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]"
      >
        NS.
      </div>

      {/* Subtle crimson light behind the main headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#D21E3B]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-2 w-2 bg-[#D21E3B]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
            Your next chapter starts here
          </span>
        </motion.div>

        {/* Oversized closing headline */}
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-8xl md:text-[10rem] lg:text-[12rem]"
        >
          SHOW UP.
          <br />
          <span className="text-[#D21E3B] tracking-[-0.01em]">STAND OUT.</span>
        </motion.h2>

        {/* Supporting copy and call to action */}
        <div className="mt-12 grid gap-10 border-t border-white/15 pt-8 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
            No shortcuts. No waiting for the perfect moment.
            Take the first step and make the work count.
          </p>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="https://wa.me/917010508392?text=Hi%2C%20I%27m%20interested%20in%20NIGHTSHIFT%20ATHLETICS."
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-between gap-8 border border-red-600 bg-[#D21E3B] px-6 py-5 text-xs font-black uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-transparent sm:w-auto sm:min-w-80"
            >
              Start a conversation
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Your work. Your standard.
            </p>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="w-fit text-lg font-black uppercase tracking-[-0.06em]"
          >
            NIGHTSHIFT<span className="text-[#D21E3B]">.</span>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
            <span className="flex items-center gap-2">
              <MapPin size={13} />
              Madurai, India
            </span>

            <a
              href="#programs"
              className="transition-colors hover:text-[#D21E3B]"
            >
              Training
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-[#D21E3B]"
            >
              The mindset
            </a>

            <a
              href="#home"
              className="flex items-center gap-1 transition-colors hover:text-[#D21E3B]"
            >
              Back to top
              <MoveUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Copyright line */}
        <p className="mt-8 text-[9px] uppercase tracking-[0.18em] text-white/25">
          © {new Date().getFullYear()} NIGHTSHIFT ATHLETICS. BUILT AFTER DARK.
        </p>
      </div>
    </section>
  );
}
