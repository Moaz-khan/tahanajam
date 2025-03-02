import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Work | TN Design Studio",
};

const workData = [
  { title: "Project Alpha", image: "/images/work1.jpeg" },
  { title: "Creative Design", image: "/images/work2.jpeg" },
  { title: "E-commerce Development", image: "/images/work3.jpeg" },
  { title: "Brand Identity", image: "/images/work4.jpeg" },
  { title: "UI/UX Research", image: "/images/work1.jpeg" },
  { title: "Mobile App UI", image: "/images/work2.jpeg" },
  { title: "Marketing Strategy", image: "/images/work3.jpeg" },
  { title: "Photography", image: "/images/work4.jpeg" },
  { title: "Web Development", image: "/images/work1.jpeg" },
  { title: "SEO Optimization", image: "/images/work2.jpeg" },
  { title: "Social Media Campaigns", image: "/images/work3.jpeg" },
];

function Work() {
  return (
    <section className="py-12 bg-black flex justify-center" id="work">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Grid with 2 Columns */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-[1500px]">
          {workData.map((work, index) => (
            <div
              key={index}
              className="relative w-full aspect-square bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-semibold text-white px-6 text-center">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
