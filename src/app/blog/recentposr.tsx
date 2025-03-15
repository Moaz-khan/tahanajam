"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnailImage?: string;
  launchAt?: string;
}

export default function RecentPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const Url = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${Url}/api/recentpost`, {
          cache: "no-store",
        });
        const data = await response.json();

        console.log("Fetched Posts:", data);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch recent posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-500 text-sm md:text-base">
        Loading recent posts...
      </p>
    );

  // ✅ Exclude current post
  const currentSlug = pathname.split("/").pop();
  const filteredPosts = posts.filter(
    (post) => post.slug.current !== currentSlug,
  );

  return (
    <div className="container mx-auto max-w-screen-lg px-6 md:px-16 lg:px-24 my-16">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-black">
          Recent Posts
        </h2>
        <Link
          href={"/blog"}
          className="text-sm md:text-md font-normal text-gray-900 hover:text-red-600 transition">
          See All
        </Link>
      </div>

      {/* No Posts Message */}
      {filteredPosts.length === 0 ? (
        <p className="text-gray-500 text-center text-sm md:text-base mb-10">
          No other recent posts available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="block group">
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-white">
                {/* Thumbnail Image */}
                {post.thumbnailImage && (
                  <div className="relative w-full h-48 flex justify-center items-center bg-white">
                    <Image
                      src={post.thumbnailImage}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-md md:text-lg font-semibold text-black group-hover:text-red-600 transition-all line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="border-b border-gray-300 my-4"></div>

                  {/* Published Date */}
                  <p className="text-xs md:text-sm text-gray-500">
                    {post.launchAt
                      ? new Date(post.launchAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Not Available"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
