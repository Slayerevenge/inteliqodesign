"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Whitefield",
    quote:
      "Inteliqo transformed our 3BHK apartment into a stunning modern home that perfectly reflects our family's personality. From the modular kitchen to the kids' rooms, every detail was thoughtfully designed. The team managed everything seamlessly, and the result exceeded our expectations — all delivered within the promised timeline.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "CEO, TechStart Solutions",
    quote:
      "We entrusted Inteliqo with designing our 40,000 sqft corporate office in Bangalore, and they delivered an inspiring workspace that our employees love. The open collaboration zones, ergonomic workstations, and biophilic design elements have genuinely boosted team morale and productivity. Their professionalism from concept to handover was outstanding.",
    rating: 5,
  },
  {
    name: "Dr. Suresh Gowda",
    role: "Villa Owner, Mysore",
    quote:
      "Building our dream villa in Mysore felt effortless with the Inteliqo team. Mr. Kishor Kumar's vision for blending contemporary architecture with traditional Karnataka aesthetics gave us a home that stands out in the neighbourhood. The civil construction quality is exceptional, and the interior finishes are world-class.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#D4AD6A]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-10 h-10 text-[#D4845C]/20 mb-2"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
    </svg>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="block w-12 h-0.5 bg-[#D4AD6A]" />
            <span className="block w-3 h-3 rounded-full border-2 border-[#D4845C]" />
            <span className="block w-12 h-0.5 bg-[#D4AD6A]" />
          </div>
          <p className="mt-4 text-[#707070] max-w-2xl mx-auto text-lg">
            Trusted by homeowners and businesses across Bangalore and Mysore
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-[#D4845C] to-[#D4AD6A]" />

              <QuoteIcon />
              <StarRating count={t.rating} />
              <p className="text-[#555555] leading-relaxed flex-1 mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[#EAEAEA] pt-5 mt-auto">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-11 h-11 rounded-full bg-[#D4845C] flex items-center justify-center text-white font-semibold text-sm shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#888888] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="bg-white rounded-2xl p-7 shadow-md flex flex-col relative"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <div className="absolute top-0 left-7 right-7 h-1 rounded-b-full bg-gradient-to-r from-[#D4845C] to-[#D4AD6A]" />

                <QuoteIcon />
                <StarRating count={testimonials[activeIndex].rating} />
                <p className="text-[#555555] leading-relaxed mb-6 text-[15px]">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>
                <div className="border-t border-[#EAEAEA] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#D4845C] flex items-center justify-center text-white font-semibold text-sm shrink-0">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2C2C] text-sm">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-[#888888] text-xs">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#D4845C] scale-110"
                    : "bg-[#D5D5D5] hover:bg-[#ABABAB]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
