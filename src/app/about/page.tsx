import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About | TN Design Studio",
};

const ScrollEffect = dynamic(() => import("../component/ScrollEffect"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollEffect>
        <div className="max-w-6xl mx-auto px-3 sm:px-10 md:px-10 lg:px-10 py-20 sm:py-16 md:py-24 lg:py-32">
          {/* Header Section */}
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold cursor-default">{`I'm Taha`}</h1>

          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin leading-relaxed sm:leading-loose pt-6 max-w-3xl md:max-w-4xl cursor-default">
            {`With a solid foundation in Digital Design and Creative Direction, based in London, I bring over five years of valuable experience and have been actively contributing to the Email Marketing industry for the past three years.`}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin leading-relaxed sm:leading-loose pt-6 max-w-3xl md:max-w-4xl cursor-default">
            {`Throughout my career, my approach has consistently focused on creating impactful visuals that go beyond the ordinary. Rooted in extensive research and robust conceptual development, my work aims not only to meet but to exceed client expectations.`}
          </p>

          {/* Skills Section */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-2 sm:gap-8 text-gray-500 font-semibold text-base sm:text-lg md:text-xl mt-8 cursor-default">
            <h1 className="hover:text-gray-400 duration-100">PHOTOSHOP</h1>
            <h1 className="hover:text-gray-400 duration-100">ILLUSTRATOR</h1>
            <h1 className="hover:text-gray-400 duration-100">AFTEREFFECTS</h1>
            <h1 className="hover:text-gray-400 duration-100">FIGMA</h1>
            <h1 className="hover:text-gray-400 duration-100">KLAVIYO</h1>
            <h1 className="hover:text-gray-400 duration-100">WEBFLOW</h1>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 rounded-full my-8"></div>

          {/* Academic Background */}
          <div>
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-semibold cursor-default">
              Academic Background & Expertise
            </h1>
            <div className="grid sm:grid-cols-2 gap-8 text-gray-500 py-6 max-w-3xl md:max-w-4xl cursor-default">
              <div>
                <h2 className="text-2xl sm:text-xl md:text-3xl hover:text-gray-400 duration-100">
                  MA in Graphic Arts
                </h2>
                <h3 className="text-sm sm:text-xs md:text-lg hover:text-gray-400 duration-100">
                  University of the West of England
                </h3>
                <h3 className="text-sm sm:text-xs md:text-lg hover:text-gray-400 duration-100">
                  Bristol, England
                </h3>
              </div>
              <div>
                <h2 className="text-2xl sm:text-xl md:text-3xl hover:text-gray-400 duration-100">
                  Graphic Design Specialization
                </h2>
                <h3 className="text-sm sm:text-xs md:text-lg hover:text-gray-400 duration-100">
                  CalArts
                </h3>
                <br />
                <h2 className="text-2xl sm:text-xl md:text-3xl hover:text-gray-400 duration-100">
                  Branding for Designers
                </h2>
                <h3 className="text-sm sm:text-xs md:text-lg hover:text-gray-400 duration-100">
                  LinkedIn Learnings
                </h3>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 rounded-full my-8"></div>

          {/* Services Section */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl md:max-w-4xl">
            <div>
              <h1 className="font-bold text-4xl sm:text-3xl md:text-5xl cursor-default">
                Services
              </h1>
            </div>
            <div className="pt-6 sm:pt-4 space-y-2 text-lg sm:text-base md:text-xl text-gray-500 cursor-default">
              <h1 className="hover:text-gray-400 duration-100">
                Visual Identity & Branding
              </h1>
              <h1 className="hover:text-gray-400 duration-100">
                Website Design
              </h1>
              <h1 className="hover:text-gray-400 duration-100">
                Social Media Design
              </h1>
              <h1 className="hover:text-gray-400 duration-100">Email Design</h1>
              <h1 className="hover:text-gray-400 duration-100">
                Packaging Design
              </h1>
            </div>
          </div>
        </div>
      </ScrollEffect>
    </div>
  );
}
