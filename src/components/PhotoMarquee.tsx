"use client";

import Image from "next/image";

const marqueeImages = [
  // 3D Renders
  "/projects/villa-makena-exterior.jpg",
  "/projects/modern-house-3451.jpg",
  "/projects/classical-villa.jpg",
  "/projects/makena-villa-daylight.jpg",
  "/projects/modern-apartment-front.jpg",
  "/projects/luxury-palace-bungalow.jpg",
  // Corporate highlights
  "/projects/electronics-city-office/1.jpg",
  "/projects/electronics-city-office/3.jpg",
  "/projects/electronics-city-office/7.jpg",
  "/projects/e-city-tower-1/1.jpg",
  "/projects/e-city-tower-1/4.jpg",
  "/projects/e-city-tower-1/8.jpg",
];

export default function PhotoMarquee() {
  return (
    <div className="bg-white py-6 overflow-hidden">
      <div className="marquee-track flex gap-4">
        {/* Duplicate the set for seamless loop */}
        {[...marqueeImages, ...marqueeImages].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 h-48 sm:w-80 sm:h-52 rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Project showcase"
              width={320}
              height={208}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
