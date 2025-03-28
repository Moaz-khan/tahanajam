"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Fynix™",
    size: "lg",
    image: "/images/Fynix/Cover.jpg",
    mobileImage: "/images/Fynix/finixp.png",
    category: "Complete Branding | Marketing Design",
    slug: "fynix",
  },
  {
    id: 2,
    title: "COINIO",
    size: "sm",
    image: "/images/Coinie/Logo-design.png",
    category: "Brand Identity | Logo Design",
    slug: "coinio",
  },
  {
    id: 3,
    title: "Oven Delights",
    size: "sm",
    image: "/images/Oven delights/Cover.jpg",
    category: "Logo | Branding | Photography",
    slug: "ovendelights",
  },
  {
    id: 4,
    title: "Email Design Portfolio",
    size: "lg",
    image: "/images/Email Designs/Cover.jpg",
    mobileImage: "/images/Email Designs/small1.png",
    category: "Email Design",
    slug: "emaildesignportfolio",
  },
  {
    id: 5,
    title: "Morphosys ©",
    size: "lg",
    image: "/images/Morphysis/Cover.png",
    mobileImage: "/images/Morphysis/small.png",
    category: "Branding | Website design",
    slug: "morphosys",
  },
  {
    id: 6,
    title: "AL Samyah | Company Profile",
    size: "sm",
    image: "/images/Al Samaya/Cover.jpg",
    category: "Company Profile",
    slug: "ascp",
  },
  {
    id: 7,
    title: "AL THUNAYAN GROUP",
    size: "sm",
    image: "/images/Al Thunayan/Cover.jpg",
    category: "Company Profile Design",
    slug: "althunayan",
  },
  {
    id: 8,
    title: "Inhance Jeweles",
    size: "lg",
    image: "/images/Inhance/main.jpg",
    category: "Branding | Packaging Design",
    slug: "inhancejeweles",
  },
];

export default function WorkSection() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 ${
                project.size === "lg" ? "md:col-span-2" : "md:col-span-1"
              }`}
              onClick={() => router.push(`/work/${project.slug}`)}>
              <div className="relative w-full h-[250px] md:h-[400px]">
                <Image
                  src={
                    isMobile && project.mobileImage
                      ? project.mobileImage
                      : project.image
                  }
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 hover:opacity-100 p-4 text-center">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-white text-lg mt-1">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
