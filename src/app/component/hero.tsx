"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[615px] flex items-center justify-between bg-black text-white px-6 sm:px-12 md:px-16">
      {/* Left Side (Heading) */}
      <div className="px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          I design stories, <br className="hidden md:block" />
          capturing essence <br className="hidden md:block" />
          in pixels.
        </h1>
      </div>

      {/* Right Side (Availability & Link) */}
      <div className="text-right">
        <p className="mt-4 font-normal opacity-80 text-base sm:text-lg md:text-xl">
          Available for work
        </p>
        <Link
          href={""}
          className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl font-normal text-gray-500 block">
          @hellotahanajam.co
        </Link>
      </div>
    </section>
  );
}
