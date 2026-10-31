"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  ["Expertise", "#products"],
  ["Our Process", "#process"],
  ["Projects", "#projects"],
  ["About", "#about"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-rose">
      <nav className="container flex min-h-[78px] items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3" aria-label="Sivaya Metal Craft home">
          <span className="flex h-11 w-11 items-center justify-center border border-teal/25 text-sm font-black tracking-tight text-teal">
            S<span className="text-rust">M</span>
          </span>
          <span>
            <strong className="block text-[12px] font-black tracking-[.12em] text-teal sm:text-sm">
              SIVAYA METAL CRAFT
            </strong>
            <span className="mt-1 block text-[8px] font-bold tracking-[.17em] text-rust">
              STAINLESS STEEL SPECIALISTS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[10px] font-bold tracking-[.1em] text-teal/75 transition-colors hover:text-rust">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-3 bg-teal px-5 py-4 text-[9px] font-black tracking-[.1em] text-rose transition-colors hover:bg-rust sm:flex">
          DISCUSS YOUR PROJECT <span>↗</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center border border-teal/20 text-xl text-teal md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-teal/10 bg-rose px-6 py-5 md:hidden"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-teal/10 py-4 text-xs font-bold tracking-widest text-teal">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block bg-teal px-5 py-4 text-center text-xs font-bold text-rose">
            START A PROJECT ↗
          </a>
        </motion.div>
      )}
    </header>
  );
}
