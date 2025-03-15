import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText, PortableTextBlock, PortableTextComponents } from "@portabletext/react";
import { Metadata } from "next";
import LikeButton from "../like";
import CommentSection from "../comments";
import { dataset, projectId } from "@/sanity/env";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CopyLinkButton from "../copylinkbutton";
import ShareButton from "../sharebutton";
import RecentPosts from "../recentposr";

interface Blog {
  launchAt?: string;
  title: string;
  description: string;
  mainImage?: string;
  content: PortableTextBlock[];
  tags?: string[];
}

type Props = {
  params: { slug: string };
};

// ✅ Generate Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await client.fetch<Blog>(
    `*[_type == "blog" && slug.current == $slug][0]{
      title, 
      description, 
      "mainImage": mainImage.asset->url,
      content,
      tags
    }`,
    { slug: params.slug },
  );

  return {
    title: blog?.title || "Blog Post",
    description: blog?.description || "Read the latest blog post",
    openGraph: {
      title: blog?.title || "Blog Post",
      description: blog?.description || "Read the latest blog post",
      images: blog?.mainImage ? [blog.mainImage] : [],
    },
  };
}

// ✅ Fetch Blog Data (Server-Side)
const fetchBlog = async (slug: string): Promise<Blog | null> => {
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      title, 
      description, 
      "mainImage": mainImage.asset->url,  
      content,
      tags,
      launchAt
    }`;

    return await client.fetch<Blog>(query, { slug });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

// ✅ Custom Component to Show Images inside Content
const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string } } }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${value.asset._ref.split("-")[1]}.${value.asset._ref.split("-")[2]}`;

      return (
        <div className="flex justify-center my-6">
          <Image
            src={imageUrl}
            alt="Blog Content Image"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-gray-900">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold mt-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-semibold mt-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-medium mt-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside ml-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  },
};

const fetchCommentCount = async (postId: string): Promise<number> => {
  try {
    const count = await client.fetch<number>(
      `count(*[_type == "comment" && postId == $postId])`,
      { postId },
      { cache: "no-cache" }, // ✅ Disable caching
    );
    return count || 0;
  } catch (error) {
    console.error("Error fetching comment count:", error);
    return 0;
  }
};

// ✅ Server Component (Static + Revalidate)
export default async function BlogDetailPage({ params }: Props) {
  const blog = await fetchBlog(params.slug);
  const commentCount = await fetchCommentCount(params.slug);
  const Url = process.env.NEXT_PUBLIC_BASE_URL;

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Blog Not Found</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-12">
      <div className="flex justify-center py-14 px-6 sm:px-3">
        <div className="bg-white rounded-lg border border-transparent lg:border lg:border-black md:border md:border-black p-1 lg:p-14 md:p-14 max-w-5xl w-full">
          {/* ✅ Publish Date & Share Button */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 text-sm sm:text-base">
              {blog.launchAt
                ? new Date(blog.launchAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Not Available"}
            </p>
            <ShareButton postUrl={`${Url}/blog/${params.slug}`} />
          </div>

          {/* ✅ Blog Title & Description */}
          <h1 className="text-3xl lg:text-3xl md:text-3xl sm:text-lg font-bold">
            {blog.title}
          </h1>
          <p className="text-black mt-2 text-base sm:text-lg">
            {blog.description}
          </p>

          {/* ✅ Blog Main Image */}
          {blog.mainImage && (
            <div className="mt-6 flex justify-center">
              <Image
                src={blog.mainImage}
                alt={blog.title}
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          )}

          {/* ✅ Blog Content */}
          <div className="mt-6 text-black">
            <PortableText value={blog.content ?? []} components={components} />
          </div>

          {/* ✅ Tags Section */}
          {blog.tags?.length ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {blog.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`${Url}/blog`}
                  className="px-4 py-1 bg-white font-semibold text-sm border border-black/50 hover:border-black">
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}

          <div className="border-t border-gray-300 my-6"></div>
          <div className="flex justify-start items-center gap-4 text-lg">
            <div>
              <Link href={""}>
                <FaFacebookF />
              </Link>
            </div>
            <div>
              <Link href={""}>
                <FaXTwitter />
              </Link>
            </div>
            <div>
              <Link href={""}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div>
              <CopyLinkButton />
            </div>
          </div>

          <div className="border-t border-gray-300 my-6"></div>
          {/* ✅ Social & Like Button */}
          <div className="flex justify-between items-center">
            <div className="text-gray-700">{commentCount} Comments</div>
            <LikeButton postId={params.slug} />
          </div>
        </div>
      </div>

      {/* ✅ Recent Posts & Comments */}
      <RecentPosts />
      <CommentSection postId={params.slug} />
    </div>
  );
}
