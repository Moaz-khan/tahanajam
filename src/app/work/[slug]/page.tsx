"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ScrollEffect = dynamic(() => import("../../component/ScrollEffect"), {
  ssr: false,
});

const workDetails: Record<
  string,
  {
    title: string;
    details: Record<string, string>;
    description: string;
    mainImage: string;
    designs: string[];
    links?: Record<string, string>;
  }
> = {
  fynix: {
    title: "Fynix™",
    details: {
      "Project Type": "Branding & Marketing Design",
      Date: "05 Feb 2025",
    },
    description: `Fynix Gym lacked a strong brand identity and marketing strategy, making it difficult to attract and retain members. They needed a cohesive, professional look that resonated with both men and women.

I developed a complete branding solution, including a powerful logo, a balanced color scheme, and marketing assets like business cards, posters, and billboards. This transformation gave Fynix Gym a bold and consistent presence, strengthening its impact in the fitness industry.`,
    mainImage: "/images/Fynix/Cover.jpg",
    designs: [
      "/images/Fynix/fynix1.jpg",
      "/images/Fynix/fynix2.jpg",
      "/images/Fynix/fynix3.jpg",
      "/images/Fynix/fynix4.jpg",
      "/images/Fynix/fynix.jpg",
      "/images/Fynix/fynix5.jpg",
    ],
  },
  coinio: {
    title: "COINIO",
    details: {
      Services: "Brand Identity, Logo Design",
      Date: "2023",
    },
    description:
      "COINIO is an exciting new project that has recently been launched. Myr focus is on creating a unique brand identity and feel for this crypto exchange brand. With expertise and experience, we are confident that COINIO will stand out in the competitive world of cryptocurrency.",
    mainImage: "/images/Coinie/Logo-design.png",
    designs: [
      "/images/Coinie/coinie1.jpg",
      "/images/Coinie/coinie2.jpg",
      "/images/Coinie/coinie3.jpg",
      "/images/Coinie/coinie4.jpg",
      "/images/Coinie/coinie5.jpg",
      "/images/Coinie/coinie6.jpg",
    ],
  },
  solecrafters: {
    title: "Sole Crafters",
    details: {
      "Project Type": "Website design",
      Date: "June 2023",
    },
    description:
      "I'm proud to have collaborated with Sole Crafters to enhance their online presence with a modern touch. Leveraging my design expertise, I crafted a clean, modern design that accurately portrays the business's high standards.",
    mainImage: "/images/work3.jpeg",
    designs: ["/images/work3.jpeg", "/images/work3.jpeg", "/images/work3.jpeg"],
  },

  emaildesignportfolio: {
    title: "Email Design Portfolio",
    details: {
      Services: "Email Design",
      Platform: "Photoshop, Figma, Klaviyo and Attentive",
    },
    description:
      "These are the top-notch emails I've designed for my personal projects and agency clients. Using Photoshop, Figma, Klaviyo, and Attentive, I've created impactful campaigns that have contributed to millions in revenue for my clients. With over 4 years of experience in crafting high-quality emails, I specialize in driving results and maximizing ROI.",
    mainImage: "/images/work4.jpeg",
    designs: ["/images/work4.jpeg", "/images/work4.jpeg", "/images/work4.jpeg"],
    links: {
      "Figma Portfolio":
        "https://www.figma.com/design/A8IkQzdDZboaSMGGeSo60v/Email-examples?t=dzgS8UihAj8iylL0-0",
    },
  },
  ovendelights: {
    title: "Oven Delights",
    details: {
      "Project Type": "Photography",
      Date: "April 2023",
      Services: "Logo | Branding | Social Media Design",
      ForDate: "2023",
    },
    description:
      "Oven Delights is a bakery located in London that recently underwent a rebranding process. The project aimed to give the brand a fresh identity, which included designing a new logo and business card, and establishing a new look and feel for the brand.",
    mainImage: "/images/work1.jpeg",
    designs: ["/images/work1.jpeg", "/images/work1.jpeg", "/images/work1.jpeg"],
  },
  morphosys: {
    title: "Morphosys ©",
    details: {
      Services: "Branding | Website design",
      Date: "Aug 2023",
    },
    description: `Morphosys is dedicated to spearheading the integration of Web3 infrastructure into major corporations' operations. Our mission is to shape a future marked by seamless collaboration, enhanced security, utmost transparency, and effortless simplicity for users and enterprises alike.

Our visual identity isn't merely about aesthetics; it mirrors our dedication to leading the charge in the dawn of Web3 infrastructure.`,
    mainImage: "/images/work2.jpeg",
    designs: ["/images/work2.jpeg", "/images/work2.jpeg", "/images/work2.jpeg"],
  },
  ascp: {
    title: "AL Samyah | Company Profile",
    details: {
      Services: "Company Profile",
      Date: "2022",
    },
    description: `The company profile of AL Samyah, a group of companies based in UAE specializing in construction. Collaborating with their management team, I designed a company profile that highlights their values and expertise in the industry.`,
    mainImage: "/images/work3.jpeg",
    designs: ["/images/work3.jpeg", "/images/work3.jpeg", "/images/work3.jpeg"],
  },
  nectar: {
    title: "Nectar",
    details: {
      Services: "Label Designs",
      Date: "2023",
    },
    description: `The Nectar is a newly launched skin care brand with a focus on natural and sustainable ingredients. As part of this project, the team has tasked me with designing and creating product labels that will showcase the brand's commitment to quality and eco-friendliness.`,
    mainImage: "/images/work4.jpeg",
    designs: ["/images/work4.jpeg", "/images/work4.jpeg", "/images/work4.jpeg"],
  },
  inhancejeweles: {
    title: "Inhance Jeweles",
    details: {
      Services: "Branding | Packaging Design",
      Date: "2021",
    },
    description: `Inhance Jeweles is a new and exciting project from Dubai, launched in 2021. The brand focuses on creating stunning jewelry pieces that are both unique and timeless. As the designer behind the brand's identity and packaging, I am thrilled to introduce this project to the world and showcase the beauty and craftsmanship of Inhance Jeweles.`,
    mainImage: "/images/work1.jpeg",
    designs: ["/images/work1.jpeg", "/images/work1.jpeg", "/images/work1.jpeg"],
  },
  peugeot: {
    title: "Peugeot Pitch Deck",
    details: {
      Date: "March, 2017",
      Role: "Digital Designer | Motion Designer",
    },
    description: `In 2017, I had the privilege of working alongside the talented team at Spectrum Digital to craft a comprehensive pitch deck for the launch of Peugeot in Pakistan. In this exciting project, I contributed as both a motion designer and digital designer, harnessing my skills to create visually compelling and impactful presentations. Our collaborative efforts aimed to effectively communicate Peugeot's brand identity, vision, and offerings to potential stakeholders and partners in the Pakistani market. It was a rewarding experience to be part of such a significant initiative, and I'm proud of the role I played in helping to pave the way for Peugeot's entry into Pakistan's automotive landscape.`,
    mainImage: "/images/work2.jpeg",
    designs: ["/images/work2.jpeg", "/images/work2.jpeg", "/images/work2.jpeg"],
  },
  althunayan: {
    title: "AL THUNAYAN GROUP",
    details: {
      "Peoject Type": "Company Profile Design",
      Date: "2019",
    },
    description: `I was tasked with designing a minimalist company profile for one of Dubai's leading groups. Through careful attention to detail and a focus on simplicity, I crafted a visually appealing profile that effectively showcased the essence and strengths of the client's business. The client's satisfaction was evident as they expressed their delight with the outcome, noting that the profile had significantly enhanced their professional image and credibility.`,
    mainImage: "/images/work3.jpeg",
    designs: ["/images/work3.jpeg", "/images/work3.jpeg", "/images/work3.jpeg"],
  },
};

export default function WorkDetailPage() {
  const params = useParams();
  console.log("Params Slug:", params.slug);

  const slug =
    typeof params.slug === "string" ? params.slug.toLowerCase() : null;
  const work = slug && slug in workDetails ? workDetails[slug] : null;

  if (!work) {
    return (
      <h1 className="text-2xl font-bold text-center text-white">
        Work Not Found
      </h1>
    );
  }

  return (
    <section className="py-12 flex justify-center bg-black text-white">
      <ScrollEffect>
        <div className="container mx-auto px-4 flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between mb-12 gap-6">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
              {Object.entries(work.details).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <h3 className="text-xl font-semibold text-white">{key}:</h3>
                  <p className="text-lg">{String(value)}</p>
                </div>
              ))}
            </div>

            <div className="lg:w-1/2">
              <p className="text-xl text-gray-300">{work.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[work.mainImage, ...work.designs].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Design ${index + 1}`}
                width={1200}
                height={700}
                className="w-full h-[700px] object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>

          {work.links && (
            <div className="mt-6 text-center">
              {Object.entries(work.links).map(([label, url]) => (
                <Link
                  key={label}
                  href={url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline">
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </ScrollEffect>
    </section>
  );
}
