import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TN Design Studio",
};


export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="p-10 sm:p-16 md:p-20">
        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">{`I'm Taha`}</h1>
        <p className="text-lg sm:text-base md:text-xl lg:text-2xl font-thin pt-6 sm:pt-4 md:pt-6">
          {`With a solid foundation in Digital Design and Creative Direction, based in London. I bring over five years of`}{" "}
          {`valuable experience to the table and have been actively contributing to the Email Marketing industry for the past three years.`}
        </p>
        <p className="text-lg sm:text-base md:text-xl lg:text-2xl font-thin pt-6 sm:pt-4 md:pt-6">
          {`Throughout my career, my approach has consistently focused on creating impactful visuals that go beyond the ordinary. Rooted in extensive research and robust conceptual development, my work aims not only to meet but to exceed client expectations.`}
        </p>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-start gap-4 px-5 sm:px-3 md:px-10 text-md sm:text-sm md:text-lg text-gray-500 font-semibold mt-6">
          <h1>PHOTOSHOP</h1>
          <h1>ILLUSTRATOR</h1>
          <h1>AFTEREFFECTS</h1>
          <h1>FIGMA</h1>
          <h1>KLAVIYO</h1>
          <h1>WEBFLOW</h1>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 rounded-full my-6"></div>

        {/* Academic Background */}
        <div className="px-5 sm:px-3 md:px-10">
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-semibold">
            Academic Background & Expertise
          </h1>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start text-gray-500 py-6">
            <div className="text-start">
              <h2 className="text-2xl sm:text-xl md:text-3xl">
                MA in Graphic Arts
              </h2>
              <h3 className="text-sm sm:text-xs md:text-lg">
                University of the West of England
              </h3>
              <h3 className="text-sm sm:text-xs md:text-lg">
                Bristol, England
              </h3>
            </div>
            <div className="text-start md:ml-20">
              <h2 className="text-2xl sm:text-xl md:text-3xl">
                Graphic Design Specialization
              </h2>
              <h3 className="text-sm sm:text-xs md:text-lg">CalArts</h3>
              <br />
              <h2 className="text-2xl sm:text-xl md:text-3xl">
                Branding for Designers
              </h2>
              <h3 className="text-sm sm:text-xs md:text-lg">
                LinkedIn Learnings
              </h3>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 rounded-full my-6"></div>

        {/* Services Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start px-5 sm:px-3 md:px-10">
          <div>
            <h1 className="font-bold text-4xl sm:text-3xl md:text-5xl">
              Services
            </h1>
          </div>
          <div className="pt-6 sm:pt-4">
            <h1 className="text-lg sm:text-sm md:text-2xl text-gray-500">
              Visual Identity & Branding
            </h1>
            <h1 className="text-lg sm:text-sm md:text-2xl text-gray-500">
              Website Design
            </h1>
            <h1 className="text-lg sm:text-sm md:text-2xl text-gray-500">
              Social Media Design
            </h1>
            <h1 className="text-lg sm:text-sm md:text-2xl text-gray-500">
              Email Design
            </h1>
            <h1 className="text-lg sm:text-sm md:text-2xl text-gray-500">
              Packaging Design
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
