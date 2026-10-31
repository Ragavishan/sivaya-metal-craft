"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const links = [
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        closeMenu();
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const menuTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: "easeInOut" as const };

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 shadow-[0_4px_30px_rgba(59,51,40,0.05)] backdrop-blur-xl"
    >
      <div className="container flex h-[76px] items-center justify-between">
        {/* Brand identity */}
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Sivaya Metal Craft home"
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Sivaya Metal Craft"
            width={220}
            height={80}
            priority
            className="h-12 w-auto max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14 sm:max-w-[220px]"
          />
        </a>


        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-3 text-[11px] font-bold tracking-[0.07em] text-espresso/75 transition-colors duration-300 hover:text-gold-dark"
            >
              {link.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-gold-dark transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden min-h-11 items-center gap-4 border border-gold-dark bg-champagne px-5 py-3 text-[10px] font-extrabold tracking-[0.08em] text-dark-surface transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-gold-light lg:inline-flex"
        >
          START A PROJECT
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="grid size-11 place-items-center rounded-full border border-gold/60 text-espresso transition-colors duration-300 hover:border-gold-dark hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dark lg:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile and tablet navigation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={menuTransition}
            className="overflow-hidden border-t border-gold/25 bg-ivory lg:hidden"
          >
            <div className="container py-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: -8 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.2, delay: index * 0.035 }
                  }
                  className="flex items-center justify-between border-b border-gold/20 py-4 text-sm font-semibold tracking-wide text-espresso/80 transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-gold-dark"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-gold-dark">
                    ↗
                  </span>
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-5 flex min-h-12 items-center justify-between border border-gold-dark bg-champagne px-5 py-4 text-xs font-extrabold tracking-[0.08em] text-dark-surface transition-colors hover:bg-espresso hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dark"
              >
                START A PROJECT
                <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-5 pb-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-espresso/45">
                Stainless Steel Fabrication &amp; Custom Solutions
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}