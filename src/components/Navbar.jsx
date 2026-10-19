
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

// Keep the navigation links separate from the layout.
const links = [
  { label: "TRAINING", href: "#programs" },
  { label: "IDENTITY", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

// Render a floating navigation panel distinct from the hero.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5"
    >
      {/* The rounded panel creates a separate navigation surface. */}
      <nav className="mx-auto flex h-[66px] max-w-[1400px] items-center justify-between rounded-2xl border border-white/10 bg-[#111012]/85 px-5 text-[#F1EDE8] shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-7">
        {/* Brand mark stays compact on the left. */}
        <a
          href="#home"
          className="text-lg font-black tracking-[-0.06em] sm:text-xl"
        >
          NIGHTSHIFT<span className="text-[#C1122F]">®</span>
        </a>

        {/* Desktop navigation is visually centred in the panel. */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[9px] font-semibold tracking-[0.16em] text-white/60 transition-colors hover:text-[#F1EDE8]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Crimson action makes the navigation easy to distinguish. */}
        <a
          href="#programs"
          className="hidden items-center gap-3 rounded-lg bg-[#C1122F] px-4 py-3 text-[9px] font-bold tracking-[0.12em] transition-colors hover:bg-[#E32643] sm:flex"
        >
          GET STARTED
          <ArrowUpRight size={14} />
        </a>

        {/* Toggle navigation on smaller screens. */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nightshift-mobile-menu"
          className="p-2 transition-colors hover:text-[#E32643] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu appears in its own panel below the navbar. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nightshift-mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-2xl border border-white/10 bg-[#111012]/95 px-5 text-[#F1EDE8] shadow-2xl backdrop-blur-xl sm:px-7 md:hidden"
          >
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 border-b border-white/10 py-5 text-[10px] font-semibold tracking-[0.15em] text-white/70 hover:text-white"
              >
                <span className="font-mono text-[#C1122F]">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            ))}

            <a
              href="#programs"
              onClick={() => setOpen(false)}
              className="my-4 flex items-center justify-between rounded-lg bg-[#C1122F] px-4 py-4 text-[10px] font-bold tracking-[0.13em]"
            >
              GET STARTED
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
