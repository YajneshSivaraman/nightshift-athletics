
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// Create a character-led athletic campaign with layered motion.
export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Move the photo gently as the visitor scrolls.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      id="home"
      // Make the hero start at the very top and fill the viewport.
// Make the hero start at the very top and fill the viewport.
className="relative isolate mt-0 min-h-[100svh] w-full overflow-hidden bg-[#080809] text-[#F1EDE8]"  >
      {/* Crimson light creates depth behind the main character. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,#3A0711_0%,#160409_38%,#080809_75%)]" />

      {/* The athlete is the centrepiece, not a background decoration. */}
      <motion.div
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=90"
          alt="Athlete in a focused training pose"
          fetchPriority="high"
          className="h-full w-full object-cover object-[55%_center] opacity-80 grayscale-[35%]"
        />

        {/* Blend the photo into the crimson environment. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080809]/40 via-transparent to-[#080809]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/65 via-transparent to-[#080809]/35" />
        <div className="absolute inset-0 bg-[#A80720]/10 mix-blend-color" />
      </motion.div>

      {/* Main scene layout. */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1700px] flex-col px-5 pb-7 pt-24 sm:px-9 lg:px-14">
        {/* Small metadata sits above the image composition. */}
        <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/55 sm:text-[9px]">
          <span>Independent Performance Culture</span>
          <span>Est. 2026 / Madurai</span>
        </div>

        {/* Central title uses the scene instead of a standard text column. */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-12 text-center">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-5 text-[9px] font-semibold uppercase text-white/80 sm:text-[10px]"
          >
            The hours that define you
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
           className="relative z-10 text-[clamp(4rem,13.5vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.02em]"  >
            AFTER
            <span className="block text-[#D21E3B]">DARK.</span>
          </motion.h1>

          <motion.a
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            href="#programs"
            className="group mt-8 inline-flex items-center gap-5 border border-white/30 bg-black/20 px-5 py-3.5 text-[9px] font-bold tracking-[0.18em] backdrop-blur-sm transition-colors hover:border-[#C1122F] hover:bg-[#C1122F]"
          >
            ENTER NIGHTSHIFT
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        {/* Oversized wordmark creates a poster-like bottom edge. */}
        <div className="relative overflow-hidden border-t border-white/15 pt-3">
          <p className="pointer-events-none select-none whitespace-nowrap text-center text-[clamp(2.8rem,11.7vw,10.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white/[0.09]">
            NIGHTSHIFT
          </p>

          <div className="relative flex items-end justify-between gap-4 pt-3">
            <div>
              <p className="text-[8px] tracking-[0.17em] text-white/40">
                STRENGTH / CONTROL / DISCIPLINE
              </p>
              <p className="mt-2 text-[9px] font-semibold tracking-[0.15em] text-[#D21E3B]">
                BUILT BEYOND ORDINARY
              </p>
            </div>

            <a
              href="#programs"
              aria-label="Explore training"
              className="flex items-center gap-2 text-[9px] tracking-[0.12em] text-white/70 transition-colors hover:text-[#D21E3B]"
            >
              EXPLORE
              <ArrowDownRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
