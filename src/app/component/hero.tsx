"use client";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taha Najam - Freelance Graphic Designer - UK & USA",
};

export default function Hero() {
  return (
    <section className="sm:min-h-[60vh] lg:min-h-[60vh] flex flex-col sm:flex-row items-center justify-between bg-black text-white px-6 sm:px-12 md:px-10 lg:px-10 xl:px-10 py-8 sm:py-12 lg:py-20">
      {/* Left Side (Heading) */}
      <div className="px-4 md:px-6 max-w-3xl text-start sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
          I design stories, <br className="hidden md:block sm:block" />
          capturing essence <br className="hidden md:block sm:block" />
          in pixels.
        </h1>
      </div>

      {/* Right Side (Availability & Link) */}
      <div className="text-start sm:text-right mt-6 sm:mt-0 mr-6">
        <p className="font-normal opacity-80 text-base sm:text-lg md:text-xl">
          Available For Work
        </p>
        <Link
          href={""}
          className="text-base sm:text-lg md:text-xl font-normal text-gray-500 block hover:text-gray-400 duration-100">
          @hellotahanajam.co
        </Link>
      </div>
    </section>
  );
}
