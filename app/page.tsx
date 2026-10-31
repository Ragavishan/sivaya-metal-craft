import Hero from "../src/components/Hero";
import Projects from "../src/components/Projects";
import Products from "../src/components/Products";
import About from "../src/components/About";
import Process from "../src/components/Process";
import Contact from "../src/components/Contact";
import BrandStatement from "../src/components/BrandStatement";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#171715] text-[#F0E9DD]">

      <main>
        {/* 01 — Cinematic Architectural Hero */}
        <Hero />

        {/* 03 — Selected Architectural Projects */}
        <Projects />

        <BrandStatement />

        {/* 04 — Products & Solutions */}
        <Products />

        {/* 05 — About Our Craftsmanship */}
        <About />

        {/* 06 — Our Process */}
        <Process />

        {/* 07 — Project Enquiry */}
        <Suspense
          fallback={
            <div className="min-h-[420px] bg-[#111110]" />
          }
        >
          <Contact />
</Suspense>
      </main>

      <footer className="border-t border-[#B69A70]/25 bg-[#111110] px-6 py-10 text-[#F0E9DD] sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-3xl tracking-wide">
              SIVAYA <span className="italic text-[#B69A70]">METAL CRAFT</span>
            </h2>

            <p className="mt-3 text-[9px] tracking-[0.3em] text-[#A8A197]">
              STAINLESS STEEL · ARCHITECTURAL CRAFT
            </p>
          </div>

          <div className="text-[10px] tracking-[0.18em] text-[#A8A197] md:text-right">
            <p>CRAFTED WITH PRECISION.</p>
            <p className="mt-2">
              © {new Date().getFullYear()} SIVAYA METAL CRAFT. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
