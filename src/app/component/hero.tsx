"use client";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taha Najam - Freelance Graphic Designer - UK & USA",
};

export default function Hero() {
  return (
    <section className="h-full flex flex-col justify-between bg-black text-white px-8 py-14 lg:py-20 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full px-6 sm:px-12 md:px-16 lg:px-20 gap-6 sm:gap-0">
        {/* Left Side (Heading) */}
        <div className="max-w-4xl text-[9vw] sm:text-[4vw] md:text-[4vw] lg:text-[4.5vw] xl:text-[4vw] font-semibold leading-[1.15] sm:leading-[1.1] tracking-sung">
          <h1>I design stories,</h1>
          <h1>capturing essence</h1>
          <h1> in pixels.</h1>
        </div>

        {/* Right Side (Mobile: Below Left Side, Larger Screens: Right Side) */}
        <div className="text-left sm:text-right">
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400">
            Available for work
          </p>
          <Link
            href="mailto:hello@tahanajam.co"
            className="text-sm sm:text-base md:text-lg font-normal text-gray-500 hover:text-gray-400 duration-100">
            hello@tahanajam.co
          </Link>
        </div>
      </div>
    </section>
  );
}
