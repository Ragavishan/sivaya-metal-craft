"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectCategories = [
  {
    number: "01",
    name: "Staircases & Handrails",
    slug: "/projects/staircases-handrails",
  },
  {
    number: "02",
    name: "Balconies & Railings",
    slug: "/projects/balconies-railings",
  },
  {
    number: "03",
    name: "Custom Furniture",
    slug: "/projects/custom-furniture",
  },
  {
    number: "04",
    name: "Commercial Products",
    slug: "/projects/commercial-products",
  },
  {
    number: "05",
    name: "Custom Fabrication",
    slug: "/projects/custom-fabrication",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#111110] px-6 pt-12 pb-20 text-[#F0E9DD] sm:px-10 sm:pt-14 md:pb-24 md:pt-10"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="mb-7 flex items-center justify-center gap-4 text-[9px] tracking-[0.4em] text-[#B69A70]">
            <span className="h-px w-9 bg-[#B69A70]" />
            EXPLORE OUR WORK
            <span className="h-px w-9 bg-[#B69A70]" />
          </p>

          <h2 className="whitespace-nowrap font-serif text-[clamp(2rem,7vw,5.5rem)] leading-tight tracking-[-0.045em]">
            Selected{" "}
            <span className="italic text-[#B69A70]">Projects.</span>
          </h2>

          <p className="mt-5 font-serif text-lg italic tracking-wide text-[#B69A70] sm:text-xl">
            "Crafted in steel. Defined by detail."
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#A8A197]">
            Explore our architectural metalwork and bespoke
            stainless steel creations.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-8 rounded-full border border-[#B69A70]/50 bg-[#191917] px-9 py-5 text-xs tracking-[0.2em] transition-all duration-300 hover:border-[#C9AD80] hover:bg-[#25221D]"
          >
            EXPLORE ALL PROJECTS

            <span className="text-lg text-[#B69A70] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-[9px] tracking-[0.3em] text-[#77736B]"
        >
          PRECISION · DESIGN · CRAFTSMANSHIP
        </motion.p>
      </div>
    </section>
  );
}