
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "YEARS OF EXPERIENCE" },
  { value: "100%", label: "MADE TO MEASURE" },
];

const navigation = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "PRODUCTS", href: "/#products" },
  { label: "PROCESS", href: "/#process" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative isolate flex min-h-[760px] w-full flex-col justify-between overflow-hidden bg-[#111110] text-[#F0E9DD] sm:min-h-[820px] md:min-h-[900px]">

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-staircase.jpg"
          alt="Architectural stainless steel staircase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center"
        />
      </div>

      {/* Background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#111110]/90 via-[#111110]/65 to-[#111110]/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#111110]/80 via-transparent to-[#111110]/35"
      />

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="absolute left-0 right-0 top-0 z-40 px-5 pt-5 sm:px-10 md:px-16 md:pt-2"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Sivaya Metal Craft home"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Sivaya Metal Craft"
              width={180}
              height={90}
              priority
              className="h-11 w-auto object-contain sm:h-16 md:h-[50px]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden flex-wrap items-center justify-end gap-2 lg:flex xl:gap-3">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/20 bg-black/10 px-4 py-2.5 text-[10px] font-medium tracking-[0.13em] text-[#F0E9DD] backdrop-blur-sm transition-all duration-300 hover:border-[#C9AD80] hover:text-[#C9AD80] hover:shadow-[0_0_16px_rgba(201,173,128,0.3)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 bg-black/30 text-[#F0E9DD] backdrop-blur-md transition-colors hover:border-[#C9AD80] hover:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80] lg:hidden"
          >
            <span className="text-xl" aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation panel */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-5 right-5 top-[76px] rounded-2xl border border-white/15 bg-[#191917]/95 p-3 shadow-2xl backdrop-blur-xl sm:left-10 sm:right-10 lg:hidden"
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-5 py-4 text-[11px] font-semibold tracking-[0.16em] text-[#F0E9DD] transition-colors hover:bg-[#B69A70]/10 hover:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-[#C9AD80]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-center px-6 pb-10 pt-32 sm:px-10 sm:pt-36 md:px-16 md:pb-10 md:pt-24">

        <div className="max-w-4xl">

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 sm:mb-6"
          >
            <p className="font-[var(--font-pinyon)] text-5xl text-[#C9AD80] drop-shadow-[0_0_14px_rgba(201,173,128,0.4)] sm:text-6xl md:text-5xl">
              Sivaya Metal Craft
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="max-w-4xl font-serif text-[clamp(3rem,8vw,7.8rem)] leading-[0.98] tracking-[-0.055em]"
          >
            Crafted with
            <br />
            precision.
            <br />
            <span className="font-normal italic text-[#C9AD80]">
              Built to endure.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-lg text-sm leading-7 text-[#D0CBC2] sm:mt-8 sm:text-base sm:leading-8"
          >
            We transform stainless steel into enduring architectural
            elements — combining refined design, precision engineering
            and exceptional craftsmanship.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-[#C9AD80] bg-[#B69A70]/10 px-7 text-center text-[10px] font-semibold tracking-[0.15em] text-[#F0E9DD] shadow-[0_0_12px_rgba(201,173,128,0.25),inset_0_0_12px_rgba(201,173,128,0.06)] backdrop-blur-md transition-all duration-300 hover:bg-[#B69A70]/20 hover:shadow-[0_0_24px_rgba(201,173,128,0.45)] sm:px-8"
            >
              DISCUSS YOUR PROJECT
              <span className="text-base text-[#C9AD80] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <Link
              href="/#projects"
              className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-white/30 bg-white/[0.04] px-7 text-center text-[10px] font-medium tracking-[0.15em] text-[#F0E9DD] backdrop-blur-md transition-all duration-300 hover:border-[#C9AD80] hover:shadow-[0_0_18px_rgba(201,173,128,0.3)] sm:px-8"
            >
              EXPLORE OUR WORK
              <span className="text-base text-[#C9AD80] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="mx-auto w-full max-w-[1440px] px-6 pb-8 sm:px-10 md:px-16 md:pb-10"
      >
        <div className="grid grid-cols-1 items-center gap-6 border-t border-white/20 pt-6 md:grid-cols-[1fr_1.4fr_1fr] md:gap-8">

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 md:justify-start">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-[#C9AD80] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[110px] text-[8px] leading-4 tracking-[0.15em] text-[#C3BDB3] sm:text-[9px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="flex min-h-[76px] items-center justify-center rounded-xl border border-[#B69A70]/40 bg-transparent px-4 py-4 text-center shadow-[0_0_18px_rgba(182,154,112,0.06)]">
            <p className="font-serif text-sm leading-relaxed tracking-tight text-[#F0E9DD] sm:text-base md:text-lg">
              Precision in metal.{" "}
              <span className="italic text-[#C9AD80]">
                Excellence in every detail.
              </span>
            </p>
          </div>

          {/* Scroll link */}
          <a
            href="#projects"
            className="group flex min-h-11 items-center justify-center gap-4 text-[9px] tracking-[0.25em] text-[#C3BDB3] transition-colors hover:text-[#C9AD80] md:justify-end"
          >
            SCROLL TO EXPLORE
            <span className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-all group-hover:-translate-y-1 group-hover:border-[#B69A70]">
              ↓
            </span>
          </a>

        </div>
      </motion.div>
    </section>
  );
}
