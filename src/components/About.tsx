"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Building2, Clock, Award } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "30+ Years of Experience",
    description:
      "Decades of building and managing large-scale spaces — from pharma labs to corporate campuses.",
  },
  {
    icon: Building2,
    title: "Big Projects, Done Right",
    description:
      "We've handled spaces up to 40,000 sq ft. Whatever the scale, we deliver.",
  },
  {
    icon: Wrench,
    title: "We Handle Everything",
    description:
      "Design, materials, construction, handover — one team, start to finish, no runaround.",
  },
  {
    icon: Award,
    title: "Engineer + Designer",
    description:
      "Not just pretty — our spaces are built with real engineering behind every decision.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFAF8]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Founder Section */}
        <motion.div
          className="grid md:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Founder Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/founder.jpg"
                  alt="Kishor Kumar - Founder of Inteliqo"
                  width={288}
                  height={320}
                  className="w-full h-full object-cover object-top scale-150"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-[#8BB8E8] rounded-2xl -z-10" />
            </div>
          </div>

          {/* Founder Bio — casual */}
          <div className="text-center md:text-left">
            <p className="text-[#8BB8E8] font-semibold text-sm uppercase tracking-wider mb-3">
              The Person Behind Inteliqo
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-5">
              Kishor Kumar
            </h3>
            <p className="text-[#555555] leading-relaxed text-base sm:text-lg mb-4">
              Kishor spent over 30 years in engineering — managing large-scale
              construction and fit-out projects for companies like GlaxoSmithKline,
              Himalaya, and Sigma Aldrich. We&apos;re talking office campuses,
              manufacturing plants, labs — the works.
            </p>
            <p className="text-[#555555] leading-relaxed text-base sm:text-lg mb-4">
              Somewhere along the way, overseeing all those builds turned into a
              genuine love for the design side of things. So he started Inteliqo —
              bringing that same precision and discipline to homes and offices
              across Bangalore and Mysore.
            </p>
            <p className="text-[#555555] leading-relaxed text-base sm:text-lg">
              Think of it as having an engineer who actually cares about how your
              space looks and feels, not just whether it meets spec.
            </p>
          </div>
        </motion.div>

        {/* Why Inteliqo */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E]">
            Why Work With Us
          </h3>
          <div className="w-12 h-1 bg-[#F4A898] mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#F0EDED] group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#8BB8E8]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#8BB8E8]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#8BB8E8]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E1E1E] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#777777] leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
