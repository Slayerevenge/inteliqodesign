"use client";

import { motion } from "framer-motion";
import { Home, Building2, KeyRound, HardHat } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Interiors",
    description:
      "Transform your living spaces with elegant, functional designs that reflect your personality and lifestyle. From living rooms to bedrooms, kitchens to bathrooms.",
  },
  {
    icon: Building2,
    title: "Corporate Interiors",
    description:
      "Create inspiring workplaces that boost productivity and reflect your brand identity. Open offices, conference rooms, reception areas, and breakout zones.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Projects",
    description:
      "End-to-end project management from concept to completion. We handle design, procurement, construction, and handover — hassle-free.",
  },
  {
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Quality construction services for residential and commercial buildings. From foundation to finishing, built with engineering excellence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
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
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1E1E1E] sm:text-4xl">
            What We Do
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4A898]" />
        </div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group rounded-2xl border border-[#F5ECEB] bg-[#FFFAF8]/60 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F4A898]/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4A898]/10 transition-colors duration-300 group-hover:bg-[#F4A898]/20">
                  <Icon className="h-7 w-7 text-[#F4A898]" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-[#1E1E1E]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="mb-6 text-lg text-gray-700">
            Ready to transform your space?{" "}
            <span className="font-semibold text-[#1E1E1E]">
              Let&apos;s talk.
            </span>
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#1E1E1E] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#F4A898] hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
