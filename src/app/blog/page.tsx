import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ShareButton from "./sharebutton";
import ScrollAnimation from "../component/ScrollAnimation";

interface Blog {
  title: string;
  description: string;
  slug: string;
  thumbnailImage?: string;
  launchAt?: string;
}

const fetchBlogs = async (): Promise<Blog[]> => {
  const query = `*[_type == "blog"]{
      title, 
      description, 
      "slug": slug.current, 
      "thumbnailImage": thumbnailImage.asset->url,
      launchAt
    }`;

  const blogs = await client.fetch(query, {}, { cache: "no-store" });
  return blogs;
};

export default async function BlogListPage() {
  const blogs = await fetchBlogs();
  const Url = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="w-full bg-white min-h-screen px-0 sm:px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto pb-6 md:py-10 lg:py-10">
        {/* ✅ Blog Cards Grid */}
        <div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 
            -mt-4 md:mt-6">
          {blogs.map((blog) => (
            <ScrollAnimation key={blog.slug} stagger animationType="bounce">
              <div
                className="bg-white overflow-hidden w-full max-w-full sm:max-w-[400px] md:max-w-[550px] mx-auto 
                transition-all hover:shadow-lg hover:scale-[1.02] 
                border-b sm:border sm:border-black/30 rounded-2xl duration-300">
                {/* ✅ Blog Image */}
                {blog.thumbnailImage && (
                  <div className="w-full aspect-[16/9] relative">
                    <Image
                      src={blog.thumbnailImage}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}

                {/* ✅ Launch Date & Share Button */}
                <div className="flex justify-between items-center px-3 pb-3 gap-4">
                  <p className="text-sm text-gray-600">
                    {blog.launchAt
                      ? new Date(blog.launchAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Launch Date: Not Available"}
                  </p>
                  <ShareButton postUrl={`${Url}/blog/${blog.slug}`} />
                </div>

                {/* ✅ Blog Content (Text Fixed) */}
                <Link
                  href={`${Url}/blog/${blog.slug}`}
                  className="block cursor-none">
                  <div className="pt-0 pb-5 sm:pb-6 px-3 text-black hover:text-red-600 transition">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-2 pt-5">
                      {blog.title}
                    </h2>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
