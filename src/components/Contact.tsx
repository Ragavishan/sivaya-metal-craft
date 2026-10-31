
"use client";

import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";

const phoneNumber = "919940533359";

const categoryNames: Record<string, string> = {
  "medical-hospital": "Medical & Hospital",
  "commercial-products": "Commercial Products",
  "staircases-handrails": "Staircases & Handrails",
  "balconies-railings": "Balconies & Railings",
  "custom-fabrication": "Custom Fabrication",
};

export default function Contact() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category") ?? "";
  const categoryName = categoryNames[categorySlug];

  const message = categoryName
    ? `Hello Sivaya Metal Craft, I would like to enquire about ${categoryName}. Please share more details.`
    : "Hello Sivaya Metal Craft, I would like to discuss a stainless steel fabrication project. Please share more details.";

  const whatsappMessage = encodeURIComponent(message);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#111110] px-0 pb-16 pt-8 text-[#F0E9DD] sm:pb-20 md:pb-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 size-96 rounded-full bg-[#B69A70]/[0.06] blur-[110px]"
      />

      <div className="container relative mx-auto px-6">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#191917] p-7 sm:p-10 md:p-14 lg:p-16">

            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full border border-[#C9AD80]/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 -z-10 size-56 rounded-full border border-[#C9AD80]/15"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">

              {/* Contact content */}
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
                  <span aria-hidden="true" className="h-px w-8 bg-[#C9AD80]" />
                  START A PROJECT
                </p>

                <h2
                  id="contact-heading"
                  className="mt-6 max-w-3xl font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.045em] text-[#F0E9DD]"
                >
                  Have a space
                  <br />
                  to <span className="italic text-[#C9AD80]">build?</span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-8 text-[#A8A197] sm:text-base">
                  {categoryName
                    ? `Let’s discuss your ${categoryName.toLowerCase()} requirements, preferred design and project details.`
                    : "Have a custom fabrication requirement in mind? Let’s discuss your space, your ideas and the right solution for your project."}
                </p>

                {categoryName && (
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#B69A70]/40 bg-[#B69A70]/[0.07] px-5 py-3">
                    <span className="size-1.5 rounded-full bg-[#C9AD80]" />
                    <p className="text-[10px] font-semibold tracking-[0.13em] text-[#D8B985]">
                      ENQUIRY FOR: {categoryName.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>

              {/* Contact actions */}
              <div className="flex flex-col gap-4 lg:w-64">

                <a
                  href={`tel:+${phoneNumber}`}
                  className="group inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-full border border-[#B69A70] bg-[#B69A70] px-7 py-4 text-[10px] font-bold tracking-[0.14em] text-[#111110] transition-all duration-300 hover:border-[#D8B985] hover:bg-[#D8B985] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
                >
                  <span>CALL US</span>
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>

                <a
  href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-full border border-white/20 bg-transparent px-7 py-4 text-[10px] font-bold tracking-[0.14em] text-[#F0E9DD] transition-all duration-300 hover:border-[#C9AD80] hover:bg-[#C9AD80]/[0.08] hover:text-[#D8B985] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
>
  <span>WHATSAPP ENQUIRY</span>
  <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</a>

                <p className="pt-2 text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#A8A197]">
                  Let&apos;s discuss your requirements
                </p>
              </div>
            </div>

            {/* Bottom brand line */}
            <div className="relative mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">

              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#F0E9DD]">
                SIVAYA METAL CRAFT
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#A8A197]">
                Stainless Steel Fabrication &amp; Custom Solutions
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
