
import Link from "next/link";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Consult",
    text: "Tell us what you need and where it has to go.",
  },
  {
    num: "02",
    title: "Site Visit",
    text: "We visit your location to take measurements and understand the details.",
  },
  {
    num: "03",
    title: "Fabricate",
    text: "We turn your requirements into carefully crafted stainless steel products.",
  },
  {
    num: "04",
    title: "Install",
    text: "We complete the installation at your location, according to the agreed scope.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#111110] py-16 text-[#F0E9DD] sm:py-20 md:py-24"
    >
      {/* Subtle gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 size-72 rounded-full bg-[#B69A70]/[0.07] blur-[100px] sm:size-96"
      />

      <div className="container relative mx-auto px-6">

        {/* Section heading */}
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_.65fr] md:items-end md:gap-10">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
                <span className="h-px w-8 bg-[#C9AD80]" />
                HOW IT WORKS
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.045em] text-[#F0E9DD]">
                From idea to
                <br />
                <span className="italic text-[#C9AD80]">
                  installation.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#A8A197] sm:text-base">
              A clear process from the first conversation to the final fit.
              We understand your requirements, plan the work and create a
              solution suited to your space.
            </p>
          </div>
        </Reveal>

        {/* Process cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.07}>
              <article className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#191917] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#B69A70]/50 hover:bg-[#1D1C19] active:scale-[0.99] sm:min-h-[270px] sm:p-7">

                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[#B69A70]/0 blur-3xl transition-all duration-500 group-hover:bg-[#B69A70]/10"
                />

                {/* Number and arrow */}
                <div className="relative flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#C9AD80]/80">
                    {step.num}
                  </span>

                  <span className="grid size-10 place-items-center rounded-full border border-[#B69A70]/40 text-sm text-[#C9AD80] transition-all duration-300 group-hover:border-[#C9AD80] group-hover:bg-[#C9AD80] group-hover:text-[#111110]">
                    ↗
                  </span>
                </div>

                {/* Accent line */}
                <div className="relative mt-8 h-px w-10 bg-[#C9AD80]/70 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C9AD80]" />

                {/* Content */}
                <div className="relative mt-auto pt-7">
                  <h3 className="font-serif text-2xl tracking-[-0.025em] text-[#F0E9DD] sm:text-[1.7rem]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-7 text-[#A8A197] sm:text-sm">
                    {step.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom statement */}
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase leading-6 tracking-[0.12em] text-[#A8A197] sm:text-[11px]">
              CLEAR COMMUNICATION. CAREFUL CRAFTSMANSHIP.
              <span className="text-[#C9AD80]">
                {" "}ATTENTION TO DETAIL.
              </span>
            </p>

            <Link
              href="/#contact"
              className="group inline-flex min-h-11 items-center gap-3 self-start text-[10px] font-semibold tracking-[0.14em] text-[#C9AD80] transition-colors duration-300 hover:text-[#F0E9DD] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80] sm:self-auto"
            >
              START YOUR PROJECT
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
