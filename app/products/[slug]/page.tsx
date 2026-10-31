
import Link from "next/link";
import { notFound } from "next/navigation";

const categories = {
  "medical-hospital": {
    number: "01",
    title: "Medical & Hospital",
    subtitle: "Stainless steel solutions for healthcare spaces.",
    description:
      "Purpose-built stainless steel products for hospitals, clinics and healthcare environments, designed around practical workflows, hygiene requirements and your available space.",
    products: [
      "Instrument tables",
      "Dressing trolleys",
      "Medical storage racks",
      "Stainless steel work tables",
      "Utility cabinets",
      "Custom hospital equipment",
    ],
    image: "/images/fabrication-01.jpg",
  },
  "commercial-products": {
    number: "02",
    title: "Commercial Products",
    subtitle: "Everyday utility. Crafted with precision.",
    description:
      "Functional stainless steel furniture and utility products for commercial spaces, kitchens, workplaces and other business environments.",
    products: [
      "Stainless steel tables",
      "Chairs and benches",
      "Storage racks and shelves",
      "Kitchen work tables",
      "Utility counters",
      "Custom commercial furniture",
    ],
    image: "/images/table-01.jpg",
  },
  "staircases-handrails": {
    number: "03",
    title: "Staircases & Handrails",
    subtitle: "Architectural details made to measure.",
    description:
      "Custom stainless steel staircase and handrail solutions designed to complement your building, space and project requirements.",
    products: [
      "Stainless steel staircases",
      "Stair handrails",
      "Wall-mounted handrails",
      "Interior staircase details",
      "Exterior staircase structures",
      "Custom railing systems",
    ],
    image: "/images/staircase-01.jpg",
  },
  "balconies-railings": {
    number: "04",
    title: "Balconies & Railings",
    subtitle: "Clean lines. Confident design.",
    description:
      "Made-to-measure stainless steel balcony and railing work for residential and commercial properties, with design options tailored to each project.",
    products: [
      "Balcony railings",
      "Terrace railings",
      "Staircase safety railings",
      "Stainless steel and glass combinations",
      "Custom railing designs",
      "Architectural metalwork",
    ],
    image: "/images/balcony-01.jpg",
  },
  "custom-fabrication": {
    number: "05",
    title: "Custom Fabrication",
    subtitle: "Your requirements. Our craftsmanship.",
    description:
      "Custom stainless steel fabrication for projects that need a specific size, configuration or practical solution. Share your requirements to discuss feasibility and design.",
    products: [
      "Made-to-measure structures",
      "Custom furniture",
      "Special-purpose steel products",
      "Frames and supports",
      "Bespoke utility solutions",
      "Project-specific fabrication",
    ],
    image: "/images/railing-01.jpg",
  },
};

type CategorySlug = keyof typeof categories;

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(categories, slug)) {
    notFound();
  }

  const category = categories[slug as CategorySlug];
  const enquiryLink = `/?category=${slug}#contact`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#111110] text-[#F0E9DD]">

      {/* Navigation */}
      <header className="border-b border-white/10 bg-[#111110]">
        <div className="container mx-auto flex min-h-20 items-center justify-between gap-4 px-6">
          <Link
            href="/#products"
            className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8A197] transition-colors hover:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
          >
            <span>←</span>
            All Categories
          </Link>

          <Link
            href={enquiryLink}
            className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[#B69A70]/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D8B985] transition-all duration-300 hover:bg-[#B69A70] hover:text-[#111110] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
          >
            Enquire Now ↗
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto grid gap-10 px-6 py-14 sm:py-20 md:grid-cols-2 md:items-center md:gap-14 md:py-24 lg:py-28">

        {/* Hero content */}
        <div>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
            <span className="h-px w-8 bg-[#C9AD80]" />
            CATEGORY {category.number}
          </p>

          <h1 className="mt-6 max-w-xl font-serif text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#F0E9DD]">
            {category.title}
          </h1>

          <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-[#C9AD80] sm:text-2xl">
            {category.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-8 text-[#A8A197] sm:text-base">
            {category.description}
          </p>

          <Link
            href={enquiryLink}
            className="group mt-8 inline-flex min-h-12 items-center gap-4 rounded-full border border-[#B69A70] bg-[#B69A70] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111110] transition-all duration-300 hover:border-[#D8B985] hover:bg-[#D8B985] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
          >
            Discuss Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        {/* Category image */}
        <div className="group relative aspect-[4/4.2] overflow-hidden rounded-2xl border border-white/10 bg-[#191917] sm:aspect-[5/4.5] md:aspect-[4/5]">

          <img
            src={category.image}
            alt={`${category.title} stainless steel work`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Cinematic overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111110]/90 via-[#111110]/15 to-[#111110]/10"
          />

          {/* Image label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <span className="border border-[#C9AD80]/70 bg-[#111110]/50 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F0E9DD] backdrop-blur-sm sm:text-[10px]">
              Made to your requirements
            </span>

            <span className="font-serif text-4xl text-[#C9AD80]/80">
              {category.number}
            </span>
          </div>
        </div>
      </section>

      {/* Product types */}
      <section className="border-t border-white/10 bg-[#171715] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-6">

          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
            <span className="h-px w-8 bg-[#C9AD80]" />
            POSSIBILITIES
          </p>

          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.035em] text-[#F0E9DD] sm:text-5xl">
            What we can create
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#A8A197]">
            These are example product types. Final designs and availability
            depend on your requirements and fabrication capabilities.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product, index) => (
              <div
                key={product}
                className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-[#1D1C19] p-5 transition-all duration-300 hover:border-[#B69A70]/60 hover:bg-[#22201C]"
              >
                <span className="text-xs font-semibold tracking-widest text-[#C9AD80]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-sm font-medium text-[#E7E0D5] transition-colors group-hover:text-[#D8B985]">
                  {product}
                </h3>

                <span className="ml-auto text-sm text-[#C9AD80]/60 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="relative overflow-hidden bg-[#111110] py-16 text-[#F0E9DD] sm:py-20 md:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-[#B69A70]/[0.07] blur-[100px]"
        />

        <div className="container relative mx-auto flex flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#C9AD80]">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              Let&apos;s discuss what you need.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#A8A197]">
              Get in touch to discuss dimensions, materials, finish and project
              requirements.
            </p>
          </div>

          <Link
            href={enquiryLink}
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 self-start rounded-full border border-[#B69A70] bg-[#B69A70] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111110] transition-all duration-300 hover:border-[#D8B985] hover:bg-[#D8B985] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80] md:self-center"
          >
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#171715] py-6">
        <div className="container mx-auto px-6">
          <Link
            href="/#products"
            className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A8A197] transition-colors hover:text-[#C9AD80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9AD80]"
          >
            <span>←</span>
            Back to all categories
          </Link>
        </div>
      </footer>
    </main>
  );
}
