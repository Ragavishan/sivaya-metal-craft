
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../src/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#111110] px-6 py-20 text-[#F0E9DD] sm:px-10 md:py-28">

      <div className="mx-auto max-w-[1200px]">

        <Link
          href="/projects"
          className="text-[10px] tracking-[0.25em] text-[#B69A70] hover:text-white"
        >
          ← ALL PROJECTS
        </Link>

        <div className="mb-12 mt-20">
          <p className="text-[10px] tracking-[0.35em] text-[#B69A70]">
            COMPLETED PROJECT — {project.number}
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
            {project.title}
            <span className="text-[#B69A70]">.</span>
          </h1>

          <p className="mt-5 text-xs tracking-[0.2em] text-[#A8A197]">
            {project.type.toUpperCase()}
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#191917]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2">

          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#B69A70]">
              PROJECT OVERVIEW
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Precision in every detail.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#A8A197]">
              This completed project showcases Sivaya Metal
              Craft's workmanship in {project.type.toLowerCase()}.
              Designed and executed with attention to detail,
              functionality and craftsmanship.
            </p>
          </div>

        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="font-serif text-2xl italic text-[#B69A70]">
            Crafted in steel. Defined by detail.
          </p>

          <Link
            href="/#contact"
            className="border border-[#B69A70]/50 px-7 py-4 text-[10px] tracking-[0.2em] transition-colors hover:bg-[#B69A70] hover:text-[#111110]"
          >
            DISCUSS YOUR PROJECT ↗
          </Link>
        </div>

      </div>
    </main>
  );
}
