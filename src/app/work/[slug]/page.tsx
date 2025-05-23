import { Metadata } from "next";
import WorkDetailPage from "./work";

export async function generateMetadata(): Promise<Metadata> {
  // Yahan slug ke basis pe project data fetch karo
  return {
    title: "Taha Najam - Work Detail",
    description: "Explore the creative work and projects of Taha Najam.",
    openGraph: {
      title: "Taha Najam - Work Detail",
      description: "Explore the creative work and projects of Taha Najam.",
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return (
    <div>
      <WorkDetailPage />
    </div>
  );
}
