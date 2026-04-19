"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Pencil,
  Layers,
  FileText,
  Hammer,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Understand Requirements",
    description:
      "We listen to your vision, needs, and budget to create a tailored plan.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Design Creation",
    description:
      "Submission of detailed 2D & 3D drawings and design concepts.",
    icon: Pencil,
  },
  {
    number: 3,
    title: "Design Development",
    description:
      "Approval of drawings with iterative changes until perfection.",
    icon: Layers,
  },
  {
    number: 4,
    title: "Quote & Offer",
    description:
      "Transparent, competitive pricing with detailed cost breakdown.",
    icon: FileText,
  },
  {
    number: 5,
    title: "Execution",
    description:
      "Project management, quality checks, and on-time construction.",
    icon: Hammer,
  },
  {
    number: 6,
    title: "Handover",
    description:
      "Final walkthrough and handover of your transformed space.",
    icon: CheckCircle,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Our Design Process
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-[#F4A898] rounded-full" />
          <div className="mt-1 mx-auto w-16 h-1 bg-[#8BB8E8] rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Vertical line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#8BB8E8]/20 md:hidden" />

          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-[#8BB8E8]/20" />

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Number circle */}
                  <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-[#8BB8E8] text-white flex items-center justify-center text-sm font-bold z-10">
                    {step.number}
                  </div>

                  <div className="bg-[#FFFAF8] rounded-xl p-6 shadow-sm border border-[#F5ECEB]">
                    <div className="w-12 h-12 rounded-lg bg-[#8BB8E8]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#8BB8E8]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Alternating Timeline */}
          <div className="hidden md:grid md:grid-cols-6 md:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isEven = step.number % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative flex flex-col items-center"
                >
                  {/* Content card - alternating top/bottom */}
                  <div
                    className={`flex flex-col items-center ${
                      isEven ? "flex-col-reverse" : ""
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`bg-[#FFFAF8] rounded-xl p-5 shadow-sm border border-[#F5ECEB] text-center w-full ${
                        isEven ? "mt-6" : "mb-6"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#8BB8E8]/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#8BB8E8]" />
                      </div>
                      <h3 className="text-base font-semibold text-[#1E1E1E] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#6B6B6B] text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Number circle on the line */}
                    <div className="w-10 h-10 rounded-full bg-[#8BB8E8] text-white flex items-center justify-center text-sm font-bold z-10 shrink-0 shadow-lg shadow-[#8BB8E8]/30">
                      {step.number}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
