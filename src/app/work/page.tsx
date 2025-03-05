"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ScrollEffect = dynamic(() => import("../component/ScrollEffect"), {
  ssr: false,
});

const workData = [
  {
    title: "Fynix™",
    slug: "fynix",
    Projecttype: "Complete Branding | Marketing Design",
    image: "/images/Fynix/Cover.jpg",
  },
  {
    title: "COINIO",
    slug: "coinio",
    Projecttype: "Branding | Logo Design",
    image: "/images/Coinie/Logo-design.png",
  },
  {
    title: "Sole Crafters",
    slug: "solecrafters",
    Projecttype: "Website design",
    image: "/images/work3.jpeg",
  },
  {
    title: "Email Design Portfolio",
    slug: "emaildesignportfolio",
    Projecttype: "Email Design",
    image: "/images/work4.jpeg",
  },
  {
    title: "Oven Delights",
    slug: "ovendelights",
    Projecttype: "Logo | Branding | Social Media Design",
    image: "/images/work1.jpeg",
  },
  {
    title: "Morphosys ©",
    slug: "morphosys",
    Projecttype: "Branding | Website design",
    image: "/images/work2.jpeg",
  },
  {
    title: "AL Samyah | Company Profile",
    slug: "ascp",
    Projecttype: "Company Profile",
    image: "/images/work3.jpeg",
  },
  {
    title: "Nectar",
    slug: "nectar",
    Projecttype: "Label Designs",
    image: "/images/work4.jpeg",
  },
  {
    title: "Inhance Jeweles",
    slug: "inhancejeweles",
    Projecttype: "Branding | Packaging Design",
    image: "/images/work1.jpeg",
  },
  {
    title: "Peugeot Pitch Deck",
    slug: "peugeot",
    Projecttype: "Digital Designer | Motion Designer",
    image: "/images/work2.jpeg",
  },
  {
    title: "AL THUNAYAN GROUP",
    slug: "althunayan",
    Projecttype: "Company Profile Design",
    image: "/images/work3.jpeg",
  },
];

function Work() {
  return (
    <section className="py-12 bg-black flex justify-center" id="work">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-2 w-full max-w-[1500px]">
          {workData.map((work, index) => (
            <ScrollEffect key={index}>
              <Link href={`/work/${work.slug}`} className="block">
                <div className="relative w-full aspect-square bg-white shadow-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={1200}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex-col items-center justify-center">
                    <span className="text-xl sm:text-2xl font-semibold text-white px-6 text-center">
                      {work.title}
                    </span>
                    <br />
                    <span className="text-normal sm:text-2xl font-thin text-white px-6 text-center">
                      {work.Projecttype}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollEffect>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
