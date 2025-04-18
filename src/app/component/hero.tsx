"use client";

import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export const metadata: Metadata = {
  title: "Taha Najam - Freelance Graphic Designer - UK & USA",
};

export default function Hero() {
  return (
    <section className="h-full flex flex-col justify-between bg-black bg-fixed text-white px-8 py-14 lg:py-28 md:py-52 relative cursor-none">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full px-6 sm:px-6 md:px-16 lg:px-20 gap-6 sm:gap-0">
        {/* Left Side (Heading) with staggered animation */}
        <div className="max-w-4xl text-[8vw] sm:text-[4vw] md:text-[4vw] lg:text-[4.5vw] xl:text-[4vw] font-semibold leading-[1.15] sm:leading-[1.1] tracking-sung">
          <ScrollAnimation stagger>
            <h1>I design stories,</h1>
            <h1>capturing essence</h1>
            <h1> in pixels.</h1>
          </ScrollAnimation>
        </div>

        {/* Right Side with fade up animation */}
        <ScrollAnimation stagger>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400">
              Available for work
            </p>
            <Link
              href="mailto:hello@tahanajam.co"
              className="text-sm sm:text-base md:text-lg font-normal text-gray-500 hover:text-gray-400 duration-100 cursor-none">
              hello@tahanajam.co
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
