import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Inteliqo" };
  }

  return {
    title: `${project.title} | Inteliqo Interiors & Turnkey Solutions`,
    description: project.description,
  };
}

const categoryLabels: Record<string, string> = {
  residential: "Residential",
  corporate: "Corporate",
  renovation: "Renovation",
  "3d-renders": "3D Renders",
};

const categoryColors: Record<string, string> = {
  residential: "bg-[#F4A898]/10 text-[#F4A898] border-[#F4A898]/20",
  corporate: "bg-[#E8C88A]/10 text-[#B08A40] border-[#E8C88A]/20",
  renovation: "bg-[#6B6B6B]/10 text-[#606060] border-[#6B6B6B]/20",
  "3d-renders": "bg-[#8A8585]/10 text-[#6B6B6B] border-[#8A8585]/20",
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFAF8]">
      {/* Header Section — light */}
      <div className="bg-[#FFF7F4] pt-28 pb-12 border-b border-[#F0E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#8A8585] hover:text-[#F4A898] transition-colors duration-200 mb-8 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>

          {/* Project Title and Meta */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${categoryColors[project.category] || ""}`}
              >
                {categoryLabels[project.category] || project.category}
              </span>
              {project.sqft && project.sqft !== "-" && (
                <span className="text-[#8A8585] text-sm font-medium">
                  {project.sqft}
                </span>
              )}
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-[#8A8585]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm">{project.location}</span>
            </div>

            <p className="text-[#6B6B6B] text-base sm:text-lg max-w-3xl leading-relaxed mt-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="h-1 bg-gradient-to-r from-[#F4A898] via-[#8BB8E8] to-[#F4A898]" />

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#1E1E1E] text-lg sm:text-xl font-semibold">
            Project Gallery
            <span className="ml-2 text-sm font-normal text-[#8A8585]">
              ({project.images.length} photos)
            </span>
          </h2>
        </div>

        <ProjectGallery images={project.images} title={project.title} />
      </div>

      {/* Bottom CTA — soft background instead of dark */}
      <div className="bg-[#FFF7F4] py-16 border-t border-[#F0E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-4">
            Inspired by this project?
          </h3>
          <p className="text-[#6B6B6B] mb-8 max-w-xl mx-auto">
            Let us bring your vision to life. Reach out to discuss your project
            and discover how Inteliqo can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#F4A898] hover:bg-[#E8937F] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 border border-[#D0D0D0] text-[#606060] hover:text-[#F4A898] hover:border-[#F4A898] px-8 py-3.5 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
