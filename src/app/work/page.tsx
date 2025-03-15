import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

interface SkeletonProps {
  title: string;
  projectType: string;
  slug: string;
}

const SkeletonOne: React.FC<SkeletonProps> = ({ title, projectType, slug }) => {
  return (
    <Link href={`/work/${slug}`}>
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base text-white">{projectType}</p>
      </div>
    </Link>
  );
};

const cards = [
  {
    id: 1,
    title: "Fynix™",
    slug: "fynix",
    projectType: "Complete Branding | Marketing Design",
    image: "/images/Fynix/finixp.png",
    className:
      "col-span-1 sm:col-span-1 md:col-span-2 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Fynix/Cover.jpg",
    content: (
      <SkeletonOne
        title="Fynix™"
        projectType="Complete Branding | Marketing Design"
        slug="fynix"
      />
    ),
  },
  {
    id: 2,
    title: "COINIO",
    slug: "coinio",
    projectType: "Brand Identity | Logo Design",
    image: "/images/Coinie/Logo-design.png",
    className:
      "col-span-1 sm:col-span-1 md:col-span-1 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Coinie/Logo-design.png",
    content: (
      <SkeletonOne
        title="COINIO"
        projectType="Brand Identity | Logo Design"
        slug="coinio"
      />
    ),
  },
  {
    id: 3,
    title: "Oven Delights",
    slug: "ovendelights",
    projectType: "Logo | Branding | Photography",
    image: "/images/Oven delights/Cover.jpg",
    className:
      "col-span-1 sm:col-span-1 md:col-span-1 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Oven delights/Cover.jpg",
    content: (
      <SkeletonOne
        title="Oven Delights"
        projectType="Logo | Branding | Photography"
        slug="ovendelights"
      />
    ),
  },
  {
    id: 4,
    title: "Email Design Portfolio",
    slug: "emaildesignportfolio",
    projectType: "Email Design",
    image: "/images/Email Designs/Cover.jpg",
    className:
      "col-span-1 sm:col-span-1 md:col-span-2 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Email Designs/Cover.jpg",
    content: (
      <SkeletonOne
        title="Email Design Portfolio"
        projectType="Email Design"
        slug="emaildesignportfolio"
      />
    ),
  },
  {
    id: 5,
    title: "Morphosys ©",
    slug: "morphosys",
    projectType: "Branding | Website design",
    image: "/images/Morphysis/Cover.png",
    className:
      "col-span-1 sm:col-span-1 md:col-span-2 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Morphysis/Cover.png",
    content: (
      <SkeletonOne
        title="Morphosys ©"
        projectType="Branding | Website design"
        slug="morphosys"
      />
    ),
  },
  {
    id: 6,
    title: "AL Samyah | Company Profile",
    slug: "ascp",
    projectType: "Company Profile",
    image: "/images/Al Samaya/Cover.jpg",
    className:
      "col-span-1 sm:col-span-1 md:col-span-1 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Al Samaya/Cover.jpg",
    content: (
      <SkeletonOne
        title="AL Samyah | Company Profile"
        projectType="Company Profile"
        slug="ascp"
      />
    ),
  },
  {
    id: 8,
    title: "AL THUNAYAN GROUP",
    slug: "althunayan",
    projectType: "Company Profile Design",
    image: "/images/Al Thunayan/Cover.jpg",
    className:
      "col-span-1 sm:col-span-1 md:col-span-1 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Al Thunayan/Cover.jpg",
    content: (
      <SkeletonOne
        title="AL THUNAYAN GROUP"
        projectType="Company Profile Design"
        slug="althunayan"
      />
    ),
  },
  {
    id: 7,
    title: "Inhance Jeweles",
    slug: "inhancejeweles",
    projectType: "Branding | Packaging Design",
    image: "/images/Inhance/main.jpg",
    className:
      "col-span-1 sm:col-span-1 md:col-span-2 h-[300px] sm:h-[350px] md:h-[400px]",
    thumbnail: "/images/Inhance/main.jpg",
    content: (
      <SkeletonOne
        title="Inhance Jeweles"
        projectType="Branding | Packaging Design"
        slug="inhancejeweles"
      />
    ),
  },
];

export default function Work() {
  return (
    <div className="h-full py-10 w-full bg-black lg:px-10 md:px-10 sm:px-8">
      <LayoutGrid cards={cards} />
    </div>
  );
}
