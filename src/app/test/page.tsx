import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

interface SkeletonProps {
  title: string;
  projectType: string;
  slug: string;
}

const SkeletonOne: React.FC<SkeletonProps> = ({ title, projectType, slug }) => {
  return (
    <div>
      <Link href={`/work/${slug}`}>
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base text-white">{projectType}</p>
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Fynix™",
    slug: "fynix",
    projectType: "Complete Branding | Marketing Design",
    image: "/images/Fynix/Cover.jpg",
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/images/Fynix/Cover.jpg",
    content: (
      <SkeletonOne
        title={"Fynix™"}
        projectType={"Complete Branding | Marketing Design"}
        slug={"fynix"}
      />
    ),
  },
  {
    id: 2,
    title: "COINIO",
    slug: "coinio",
    projectType: "Brand Identity | Logo Design",
    image: "/images/Coinie/Logo-design.png",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/Coinie/Logo-design.png",
    content: (
      <SkeletonOne
        title={"COINIO"}
        projectType={"Brand Identity | Logo Design"}
        slug={"coinio"}
      />
    ),
  },
  {
    id: 3,
    title: "Sole Crafters",
    slug: "solecrafters",
    projectType: "Website Design",
    image: "/images/work3.jpeg",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/work3.jpeg",
    content: (
      <SkeletonOne
        title={"Sole Crafters"}
        projectType={"Website Design"}
        slug={"solecrafters"}
      />
    ),
  },
  {
    id: 4,
    title: "Email Design Portfolio",
    slug: "emaildesignportfolio",
    projectType: "Email Design",
    image: "/images/work4.jpeg",
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/images/work4.jpeg",
    content: (
      <SkeletonOne
        title={"Email Design Portfolio"}
        projectType={"Email Design"}
        slug={"emaildesignportfolio"}
      />
    ),
  },
  {
    id: 5,
    title: "Oven Delights",
    slug: "ovendelights",
    projectType: "Logo | Branding | Photography",
    image: "/images/work1.jpeg",
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/images/work1.jpeg",
    content: (
      <SkeletonOne
        title={"Oven Delights"}
        projectType={"Logo | Branding | Photography"}
        slug={"ovendelights"}
      />
    ),
  },
  {
    id: 6,
    image: "/images/work2.jpeg",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/work2.jpeg",
    content: (
      <SkeletonOne
        title={"Morphosys ©"}
        projectType={"Branding | Website design"}
        slug={"ovendelights"}
      />
    ),
  },
  {
    id: 7,
    image: "/images/work3.jpeg",
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/images/work3.jpeg",
    content: (
      <SkeletonOne
        title={"AL Samyah | Company Profile"}
        projectType={"Company Profile"}
        slug={"ascp"}
      />
    ),
  },
  {
    id: 8,
    image: "/images/work4.jpeg",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/work4.jpeg",
    content: (
      <SkeletonOne
        title={"Nectar"}
        projectType={"Label Designs"}
        slug={"nectar"}
      />
    ),
  },
  {
    id: 9,
    image: "/images/work2.jpeg",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/work2.jpeg",
    content: (
      <SkeletonOne
        title={"Inhance Jeweles"}
        projectType={"Branding | Packaging Designn"}
        slug={"inhancejeweles"}
      />
    ),
  },
  {
    id: 10,
    image: "/images/work2.jpeg",
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/images/work2.jpeg",
    content: (
      <SkeletonOne
        title={"Peugeot Pitch Deck"}
        projectType={"Digital Designer | Motion Designer"}
        slug={"peugeot"}
      />
    ),
  },
  {
    id: 11,
    image: "/images/work2.jpeg",
    className: "col-span-1 h-[400px]",
    thumbnail: "/images/work2.jpeg",
    content: (
      <SkeletonOne
        title={"AL THUNAYAN GROUP"}
        projectType={"Company Profile Design"}
        slug={"althunayan"}
      />
    ),
  },
  // Add other cards as needed
];

export default function Work() {
  return (
    <div className="h-full py-20 w-full bg-black">
      <LayoutGrid cards={cards} />
    </div>
  );
}
