
"use client";

import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#171715] px-6 py-28 text-[#F0E9DD] sm:px-10 md:py-10"
    >
      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">

          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B69A70]" />
              <span className="text-[9px] tracking-[0.35em] text-[#B69A70]">
                OUR PHILOSOPHY
              </span>
            </div>

            <p className="mt-8 max-w-[180px] text-xs leading-7 text-[#8F8A81]">
              Thoughtful design. Precision engineering. Lasting craftsmanship.
            </p>
          </motion.div>

          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-9"
          >
            <h2 className="max-w-5xl font-serif text-4xl leading-[1.2] tracking-[-0.035em] sm:text-5xl md:text-7xl">
              Metal is our medium.
              <br />
              <span className="italic text-[#B69A70]">
                Craftsmanship is our signature.
              </span>
            </h2>

            <div className="mt-12 grid gap-8 border-t border-[#B69A70]/30 pt-8 sm:grid-cols-2">

              <p className="text-sm leading-8 text-[#B8B1A6]">
                At Sivaya Metal Craft, we create stainless steel architectural
                elements that bring together strength, functionality and
                refined aesthetics.
              </p>

              <p className="text-sm leading-8 text-[#B8B1A6]">
                From custom staircases to elegant railings and bespoke
                fabrication, every detail is approached with care,
                precision and purpose.
              </p>

            </div>

            <div className="mt-12 flex items-center gap-5">
              <span className="font-serif text-5xl italic text-[#B69A70]">
                SK.
              </span>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#F0E9DD]">
                  SIVAYA METAL CRAFT
                </p>
                <p className="mt-2 text-[9px] tracking-[0.2em] text-[#8F8A81]">
                  STAINLESS STEEL · ARCHITECTURAL CRAFT
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
