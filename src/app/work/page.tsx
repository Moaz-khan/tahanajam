import React from "react";

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
        {/* Improved Masonry Grid with Bigger Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full max-w-[1500px] auto-rows-[1fr]">
          {workData.map((work, index) => {
            // Bigger Box Sizes for More Impact
            const sizeClass =
              index % 6 === 0
                ? "col-span-2 row-span-2 h-[800px]" // Bigger Featured Boxes
                : "h-[400px]"; // Standard Box Size

            return (
              <div
                key={index}
                className={`relative w-full ${sizeClass} bg-white shadow-lg flex items-center justify-center overflow-hidden`}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-semibold text-white px-6 text-center">
                    {work.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
