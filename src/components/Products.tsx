
"use client";

import Link from "next/link";
import Reveal from "./Reveal";


const products = [
  {
    num: "01",
    title: "Medical & Hospital",
    slug: "medical-hospital",
    desc: "Functional stainless steel solutions for healthcare spaces",
    image: "/images/fabrication-01.jpg",
  },
  {
    num: "02",
    title: "Commercial Products",
    slug: "commercial-products",
    desc: "Tables, chairs, racks and commercial utility products",
    image: "/images/table-01.jpg",
  },
  {
    num: "03",
    title: "Staircases & Handrails",
    slug: "staircases-handrails",
    desc: "Precision-crafted staircases and handrail systems",
    image: "/images/staircase-01.jpg",
  },
  {
    num: "04",
    title: "Balconies & Railings",
    slug: "balconies-railings",
    desc: "Architectural railings made for your space",
    image: "/images/balcony-01.jpg",
  },
  {
    num: "05",
    title: "Gates",
    slug: "gate-works",
    desc: "Custom-designed gates crafted for security and style",
    image: "/images/gate-works.png",
  },
  {
    num: "06",
    title: "Mirrors",
    slug: "mirror-works",
    desc: "Custom mirror frames and refined metal detailing",
    image: "/images/mirror-works.png",
  },
  
  {
    num: "07",
    title: "Custom Fabrication",
    slug: "custom-fabrication",
    desc: "Custom stainless steel work built to your requirements",
    image: "/images/railing-01.jpg",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative isolate overflow-hidden bg-[#111110] pt-8 pb-14 text-[#F0E9DD] sm:pt-10 sm:pb-16 md:pt-12 md:pb-20"
    >
      {/* Subtle gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 size-72 rounded-full bg-[#B69A70]/[0.06] blur-[100px] sm:size-96"
      />

      <div className="container relative mx-auto px-6">
        {/* Section heading */}
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_.65fr] md:items-end md:gap-10">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
                <span className="h-px w-8 bg-[#C9AD80]" />
                WHAT WE BUILD
              </p>

              <h2
                id="products-heading"
                className="mt-5 max-w-3xl font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.045em] text-[#F0E9DD]"
              >
                Steelwork with
                <br />
                <span className="italic text-[#C9AD80]">
                  purpose.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#A8A197] sm:text-base">
              From practical everyday pieces to architectural stainless steel
              work, every project is crafted around your space, requirements
              and preferred finish.
            </p>
          </div>
        </Reveal>

        {/* Product Categories */}
        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:mt-10 md:mt-12">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
              <article className="group relative aspect-square w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#191917] sm:w-[320px] lg:w-[350px]">

                {/* Product image */}
                <img
                  src={product.image}
                  alt={`${product.title} stainless steel fabrication`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cinematic dark overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#111110]/95 via-[#111110]/65 via-45% to-[#111110]/20"
                />

                {/* Subtle hover tint */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[2] bg-[#B69A70]/0 transition-colors duration-500 group-hover:bg-[#B69A70]/[0.06]"
                />

                {/* Category number */}
                <span className="pointer-events-none absolute left-5 top-5 z-[3] text-[10px] font-semibold tracking-[0.2em] text-white sm:left-6 sm:top-6">
                  {product.num}
                </span>

                {/* Decorative corner */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 z-[3] h-7 w-7 border-r border-t border-[#C9AD80]/80 transition-all duration-500 sm:right-6 sm:top-6 motion-safe:group-hover:h-10 motion-safe:group-hover:w-10"
                />

                {/* Card content */}
                <div className="pointer-events-none absolute inset-x-5 bottom-5 z-[4] sm:inset-x-6 sm:bottom-6">
                  <div className="mb-3 h-px w-10 bg-[#C9AD80] transition-all duration-500 motion-safe:group-hover:w-16" />

                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-serif text-[clamp(1.6rem,4vw,2rem)] leading-tight tracking-[-0.035em] text-[#F0E9DD] drop-shadow-lg">
                        {product.title}
                      </h3>

                      <p className="mt-2 max-w-[250px] text-xs leading-6 text-white/90 drop-shadow-md sm:text-sm">
                        {product.desc}
                      </p>

                      <Link
                        href={`/products/${product.slug}`}
                        className="pointer-events-auto mt-4 inline-flex items-center text-[10px] font-semibold tracking-[0.15em] text-[#D8B985] transition-all duration-300 hover:text-white active:scale-95 active:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
                      >
                        EXPLORE CATEGORY
                        <span className="ml-2 transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                          ↗
                        </span>
                      </Link>
                    </div>

                    {/* Enquiry link */}
                    <Link
                      href="/#contact"
                      aria-label={`Enquire about ${product.title}`}
                      className="pointer-events-auto relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-[#C9AD80]/70 bg-[#111110]/75 text-lg text-[#D8B985] backdrop-blur-sm transition-all duration-300 hover:border-[#C9AD80] hover:bg-[#C9AD80] hover:text-[#111110] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80] sm:size-11"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom statement */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-6">
            <p className="max-w-xl text-[10px] font-medium leading-5 tracking-[0.1em] text-[#A8A197] sm:text-[11px]">
              EVERY PROJECT IS FABRICATED TO REQUIREMENT —
              <span className="text-[#C9AD80]">
                {" "}NOT OFF-THE-SHELF.
              </span>
            </p>

            <Link
              href="/#contact"
              className="group inline-flex min-h-11 items-center gap-3 self-start text-[10px] font-semibold tracking-[0.14em] text-[#F0E9DD] transition-colors hover:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80] sm:self-auto"
            >
              DISCUSS YOUR REQUIREMENT
              <span className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
