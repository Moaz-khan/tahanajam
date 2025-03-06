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
  emaildesignportfolio: {
    title: "Email Design Portfolio",
    details: {
      Services: "Email Design",
      Platform: "Photoshop, Figma, Klaviyo and Attentive",
    },
    description:
      "These are the top-notch emails I've designed for my personal projects and agency clients. Using Photoshop, Figma, Klaviyo, and Attentive, I've created impactful campaigns that have contributed to millions in revenue for my clients. With over 4 years of experience in crafting high-quality emails, I specialize in driving results and maximizing ROI.",
    mainImage: "/images/Email Designs/Cover-homepage.jpg",
    designs: [
      "/images/Email Designs/1A.jpg",
      "/images/Email Designs/1B.jpg",
      "/images/Email Designs/2.jpg",
      "/images/Email Designs/2B.jpg",
      "/images/Email Designs/3A.jpg",
      "/images/Email Designs/3B.jpg",
      "/images/Email Designs/4A.jpg",
      "/images/Email Designs/4B.jpg",
      "/images/Email Designs/5A.jpg",
      "/images/Email Designs/5B.jpg",
      "/images/Email Designs/6.jpg",
      "/images/Email Designs/7.jpg",
    ],
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
    mainImage: "/images/Oven delights/Cover.jpg",
    designs: [
      "/images/Oven delights/1.jpg",
      "/images/Oven delights/2.jpg",
      "/images/Oven delights/3.jpg",
      "/images/Oven delights/4.jpg",
      "/images/Oven delights/5.jpg",
    ],
  },
  morphosys: {
    title: "Morphosys ©",
    details: {
      Services: "Branding | Website design",
      Date: "Aug 2023",
    },
    description: `Morphosys is dedicated to spearheading the integration of Web3 infrastructure into major corporations' operations. Our mission is to shape a future marked by seamless collaboration, enhanced security, utmost transparency, and effortless simplicity for users and enterprises alike.

Our visual identity isn't merely about aesthetics; it mirrors our dedication to leading the charge in the dawn of Web3 infrastructure.`,
    mainImage: "/images/Morphysis/Cover.png",
    designs: [
      "/images/Morphysis/1A.jpg",
      "/images/Morphysis/2.jpg",
      "/images/Morphysis/3.jpg",
      "/images/Morphysis/4.jpg",
      "/images/Morphysis/5.jpg",
      "/images/Morphysis/6.jpg",
      "/images/Morphysis/7.jpg",
      "/images/Morphysis/8.jpg",
    ],
  },
  ascp: {
    title: "AL Samyah | Company Profile",
    details: {
      Services: "Company Profile",
      Date: "2022",
    },
    description: `The company profile of AL Samyah, a group of companies based in UAE specializing in construction. Collaborating with their management team, I designed a company profile that highlights their values and expertise in the industry.`,
    mainImage: "/images/Al Samaya/Cover.jpg",
    designs: [
      "/images/Al Samaya/1.jpg",
      "/images/Al Samaya/2.jpg",
      "/images/Al Samaya/3.jpg",
      "/images/Al Samaya/4.jpg",
      "/images/Al Samaya/5.jpg",
      "/images/Al Samaya/6.jpg",
      "/images/Al Samaya/7.JPG",
    ],
  },
  inhancejeweles: {
    title: "Inhance Jeweles",
    details: {
      Services: "Branding | Packaging Design",
      Date: "2021",
    },
    description: `Inhance Jeweles is a new and exciting project from Dubai, launched in 2021. The brand focuses on creating stunning jewelry pieces that are both unique and timeless. As the designer behind the brand's identity and packaging, I am thrilled to introduce this project to the world and showcase the beauty and craftsmanship of Inhance Jeweles.`,
    mainImage: "/images/Inhance/1.jpg",
    designs: [
      "/images/Inhance/2.jpg",
      "/images/Inhance/main.jpg",
      "/images/Inhance/4.jpg",
      "/images/Inhance/5.jpg",
      "/images/Inhance/6.jpg",
      "/images/Inhance/7.jpg",
    ],
  },
  althunayan: {
    title: "AL THUNAYAN GROUP",
    details: {
      "Peoject Type": "Company Profile Design",
      Date: "2019",
    },
    description: `I was tasked with designing a minimalist company profile for one of Dubai's leading groups. Through careful attention to detail and a focus on simplicity, I crafted a visually appealing profile that effectively showcased the essence and strengths of the client's business. The client's satisfaction was evident as they expressed their delight with the outcome, noting that the profile had significantly enhanced their professional image and credibility.`,
    mainImage: "/images/Al Thunayan/1A.jpg",
    designs: [
      "/images/Al Thunayan/2.jpg",
      "/images/Al Thunayan/3.jpg",
      "/images/Al Thunayan/4.jpg",
      "/images/Al Thunayan/5.jpg",
      "/images/Al Thunayan/6.jpg",
      "/images/Al Thunayan/7.jpg",
      "/images/Al Thunayan/8.jpg",
      "/images/Al Thunayan/9.jpg",
    ],
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
