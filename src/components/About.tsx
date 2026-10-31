import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111110] pt-1 pb-2 text-[#F0E9DD] sm:pt-2 sm:pb-6 md:pt-3 md:pb-4"
    >
      {/* Subtle cinematic glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#B69A70]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B69A70]/[0.05] blur-[100px]" />

      <div className="container relative mx-auto grid gap-5 px-6 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6">

        {/* Main About Content */}
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-sm border border-[#B69A70]/20 bg-[#191917] p-7 sm:p-10 md:p-14">

            {/* Corner detail */}
            <div className="absolute right-0 top-0 h-24 w-24 border-r border-t border-[#B69A70]/40" />

            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
              <span className="h-px w-8 bg-[#C9AD80]" />
              SIVAYA METAL CRAFT
            </p>

            {/* Reduced top margin from mt-7 to mt-4 */}
            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Crafted with
              <br />
              precision.
              <br />
              <span className="font-normal italic text-[#C9AD80]">
                Built to last.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#A8A197]">
              Sivaya Metal Craft specialises in stainless steel fabrication
              and sales, creating tailored solutions for homes, businesses
              and architectural spaces. From everyday utility to refined
              architectural details, every project is approached with a
              focus on strength, clean finishing and practical design.
            </p>

            {/* Brand highlights */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-6">

              <div>
                <b className="block font-serif text-3xl font-normal text-[#C9AD80] sm:text-4xl">
                  SS
                </b>
                <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-[#A8A197] sm:text-[10px]">
                  Specialists
                </span>
              </div>

              <div>
                <b className="block font-serif text-3xl font-normal text-[#F0E9DD] sm:text-4xl">
                  01
                </b>
                <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-[#A8A197] sm:text-[10px]">
                  Custom Design
                </span>
              </div>

              <div>
                <b className="block font-serif text-3xl font-normal text-[#C9AD80] sm:text-4xl">
                  ∞
                </b>
                <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-[#A8A197] sm:text-[10px]">
                  Possibilities
                </span>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Philosophy Panel */}
        <Reveal delay={0.1}>
          <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-sm border border-[#B69A70]/30 bg-[#1D1C19] p-7 sm:p-10 md:p-12 lg:min-h-full">

            {/* Decorative detail */}
            <div className="absolute bottom-0 right-0 h-20 w-40 rounded-full bg-[#B69A70]/[0.06] blur-3xl" />

            <div className="relative flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#C9AD80]">
                OUR PHILOSOPHY
              </span>

              <span className="h-8 w-8 border-r border-t border-[#B69A70]/60" />
            </div>

            <div className="relative mt-12 lg:mt-0">

              <span className="block font-serif text-8xl leading-[0.7] text-[#C9AD80]/70">
                “
              </span>

              <p className="mt-7 font-serif text-3xl leading-[1.2] tracking-[-0.025em] text-[#F0E9DD] sm:text-4xl">
                Good fabrication should feel simple when it is finished —
                <span className="italic text-[#C9AD80]">
                  {" "}strong, clean and made for the space.
                </span>
              </p>

              <div className="mt-8 h-px w-16 bg-[#C9AD80]" />

              <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#A8A197]">
                SIVAYA METAL CRAFT
              </p>
            </div>

            <div className="relative mt-12 flex items-center gap-3 lg:mt-8">
              <span className="h-px w-8 bg-[#C9AD80]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#A8A197]">
                Designed around your requirements
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}