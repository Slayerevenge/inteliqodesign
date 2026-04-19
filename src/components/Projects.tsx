"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

type Filter = "all" | "residential" | "corporate" | "renovation" | "3d-renders";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Corporate", value: "corporate" },
  { label: "Renovation", value: "renovation" },
  { label: "3D Renders", value: "3d-renders" },
];

const categoryLabels: Record<string, string> = {
  residential: "Residential",
  corporate: "Corporate",
  renovation: "Renovation",
  "3d-renders": "3D Renders",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#FFF7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 mx-auto bg-gradient-to-r from-[#F4A898] to-[#8BB8E8] rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-[#6B6B6B] text-lg max-w-2xl mx-auto"
          >
            Crafting spaces that inspire — from elegant residences to world-class
            corporate environments across Bangalore and Mysore.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-[#F4A898] text-white shadow-lg shadow-[#F4A898]/25"
                  : "bg-white text-[#6B6B6B] hover:text-[#1E1E1E] border border-[#E8DCDA] hover:border-[#F4A898]/40"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  layout: { duration: 0.3 },
                }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-white border border-[#F0E8E8] transition-all duration-300 hover:border-[#F4A898]/30 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Image Count Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1E1E1E] text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      {project.images.length}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                      <p className="text-white/90 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.description.length > 120
                          ? project.description.slice(0, 120) + "..."
                          : project.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold uppercase tracking-wider text-[#F4A898] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5">
                    <h3 className="text-[#1E1E1E] font-semibold text-lg">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[#F4A898] text-sm font-medium">
                        {categoryLabels[project.category] || project.category}
                      </span>
                      {project.sqft && project.sqft !== "-" && (
                        <span className="text-[#8A8585] text-sm">
                          {project.sqft}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
