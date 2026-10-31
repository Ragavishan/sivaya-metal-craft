
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  projects,
  projectCategories,
} from "../../src/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("none");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "none") return [];

    if (activeCategory === "all") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const getCategoryCount = (slug: string) => {
    if (slug === "all") return projects.length;

    return projects.filter(
      (project) => project.category === slug
    ).length;
  };

  return (
    <main className="min-h-screen bg-[#111110] px-6 py-20 text-[#F0E9DD] sm:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">

        {/* Back Navigation */}
        <Link
          href="/"
          className="text-[10px] tracking-[0.25em] text-[#B69A70] transition-colors hover:text-white"
        >
          ← BACK TO HOME
        </Link>

        {/* Page Heading - Displayed Only Once */}
        <div className="mb-16 mt-20 border-b border-white/10 pb-10">
          <p className="mb-6 text-[10px] tracking-[0.4em] text-[#B69A70]">
            SIVAYA METAL CRAFT
          </p>

          <h1 className="font-serif text-5xl leading-tight sm:text-7xl md:text-8xl">
            Recent{" "}
            <span className="italic text-[#B69A70]">
              Projects.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#A8A197]">
            Explore our latest completed works, showcasing our
            commitment to precision and craftsmanship. Select a
            category below to discover our previous projects.
          </p>

          <p className="mt-8 text-[10px] tracking-[0.25em] text-[#B69A70]">
            {projects.length.toString().padStart(2, "0")} PROJECTS IN OUR COLLECTION
          </p>
        </div>

        
        {/* Category Filters */}
        <section className="mb-16 text-center">

        <p className="text-[10px] tracking-[0.35em] text-[#B69A70]">
            EXPLORE OUR WORK
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F0E9DD] sm:text-4xl">
            Browse by Category
        </h2>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4">

            {projectCategories.map((category) => {
            const isActive = activeCategory === category.slug;
            const count = getCategoryCount(category.slug);

            return (
                <button
                key={category.slug}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
                aria-pressed={isActive}
                className={`flex items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-[10px] tracking-[0.16em] transition-all duration-300 active:scale-95 sm:px-7 ${
                    isActive
                    ? "border-[#B69A70] bg-[#B69A70] text-[#111110]"
                    : "border-white/10 bg-[#191917] text-[#A8A197] hover:border-[#B69A70]/60 hover:text-[#F0E9DD]"
                }`}
                >
                <span>{category.title.toUpperCase()}</span>

                <span className="text-[9px] opacity-70">
                    {count.toString().padStart(2, "0")}
                </span>
                </button>
            );
            })}

        </div>

        {activeCategory !== "none" && (
            <p className="mt-7 text-[10px] tracking-[0.25em] text-[#A8A197]">
            {filteredProjects.length.toString().padStart(2, "0")} PROJECTS
            </p>
        )}

        </section>


        {/* Initial State - Before Category Selection */}
        {activeCategory === "none" && (
          <div className="py-2 text-center">
            <p className="font-serif text-2xl italic text-[#B69A70]">
              Explore Our Craft.
            </p>

            <p className="mt-3 text-sm text-[#A8A197]">
              Select a category above to discover our completed works.
            </p>
          </div>
        )}

        {/* Project Gallery */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group block"
              >
                {/* Project Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-[#191917]">

                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.type}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white">
                    {project.number}
                  </span>

                  <span className="absolute bottom-5 right-5 text-xl text-[#C9AD80] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                {/* Project Details */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#F0E9DD] transition-colors group-hover:text-[#C9AD80]">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-[10px] tracking-[0.16em] text-[#A8A197]">
                      {project.type.toUpperCase()}
                    </p>
                  </div>

                  <span className="mt-1 text-[10px] text-[#B69A70]">
                    VIEW
                  </span>
                </div>
              </Link>
            ))}

          </div>
        )}

        {/* Empty Category State */}
        {activeCategory !== "none" && filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl italic text-[#B69A70]">
              No Projects Available.
            </p>
          </div>
        )}

        {/* Bottom Statement */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="font-serif text-2xl italic text-[#B69A70] sm:text-3xl">
            Crafted in steel. Defined by detail.
          </p>
        </div>

      </div>
    </main>
  );
}
