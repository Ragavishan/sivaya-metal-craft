"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose">
      <div className="container grid min-h-[calc(100vh-78px)] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[9px] font-extrabold tracking-[.22em] text-rust"
          >
            <span className="h-px w-9 bg-rust" />
            STAINLESS STEEL FABRICATION & SALES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75 }}
            className="mt-7 text-[clamp(43px,5.4vw,76px)] font-black leading-[.99] tracking-[-.055em] text-teal"
          >
            Steel shaped
            <br />
            with <span className="text-rust">purpose.</span>
            <br />
            Spaces built
            <br />
            <span className="italic">to last.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 max-w-md text-sm leading-7 text-teal/75"
          >
            Custom stainless steel tables, chairs, staircases, balconies and
            railings — thoughtfully fabricated and installed for your space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a href="#contact" className="group inline-flex items-center gap-5 bg-teal px-6 py-4 text-[10px] font-black tracking-[.1em] text-rose transition-colors hover:bg-rust">
              START A PROJECT
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="#projects" className="inline-flex items-center border border-teal/25 px-6 py-4 text-[10px] font-black tracking-[.1em] text-teal transition-colors hover:bg-teal hover:text-rose">
              EXPLORE OUR WORK
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-10 grid max-w-md grid-cols-3 border-t border-teal/20 pt-5"
          >
            <div>
              <strong className="block text-2xl font-black tracking-tight text-teal">10<span className="text-rust">+</span></strong>
              <span className="mt-1 block text-[9px] font-bold tracking-[.12em] text-teal/65">YEARS OF CRAFT</span>
            </div>
            <div className="border-l border-teal/20 pl-4">
              <strong className="block text-2xl font-black tracking-tight text-teal">100<span className="text-rust">%</span></strong>
              <span className="mt-1 block text-[9px] font-bold tracking-[.12em] text-teal/65">CUSTOM BUILT</span>
            </div>
            <div className="border-l border-teal/20 pl-4">
              <strong className="block text-2xl font-black tracking-tight text-teal">END</strong>
              <span className="mt-1 block text-[9px] font-bold tracking-[.12em] text-teal/65">TO END SERVICE</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[650px]"
        >
          <div className="relative aspect-[4/4.5] overflow-hidden bg-teal sm:aspect-[4/3.8]">
            <img
              src="/images/hero-staircase.jpg"
              alt="Stainless steel staircase fabrication by Sivaya Metal Craft"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/65 via-transparent to-transparent" />
            <div className="absolute inset-4 border border-rose/35 sm:inset-6" />

            <div className="absolute left-7 top-7 flex items-center gap-2 text-[9px] font-bold tracking-[.18em] text-rose">
              <span className="h-2 w-2 bg-olive" />
              MADE TO MEASURE
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 sm:bottom-9 sm:left-9 sm:right-9"
            >
              <div className="text-rose">
                <span className="text-[9px] font-bold tracking-[.2em] text-rose/75">SIVAYA / 001</span>
                <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">Crafted for living.</h2>
                <p className="mt-1 text-[10px] tracking-wide text-rose/80">Architectural stainless steel</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-rose/50 text-lg text-rose">↗</span>
            </motion.div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-[8px] font-bold tracking-[.15em] text-teal/65 sm:text-[9px]">
            <span>DESIGN. FABRICATE. INSTALL.</span>
            <span className="text-rust">BUILT WITH PRECISION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
