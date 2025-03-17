"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Comment {
  image: string;
}

function TopComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // ✅ Fetch images from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`,
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data: Comment[] = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchComments();
  }, []);

  // ✅ Auto-Sliding Images
  useEffect(() => {
    if (comments.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [comments]);

  if (comments.length === 0) {
    return <p className="text-white text-center">Loading images...</p>;
  }

  return (
    <section className="py-10 bg-black flex justify-center px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div
          className={`relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] shadow-lg rounded-xl flex items-center justify-center text-center transition-opacity duration-500 overflow-hidden ${
            fade ? "opacity-100" : "opacity-0"
          }`}>
          {/* ✅ Image Carousel with Perfect Centering & High Quality */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={comments[currentIndex].image}
              alt="Carousel Image"
              width={800} // Optimized width
              height={500} // Optimized height
              quality={100} // ✅ High quality image rendering
              priority // ✅ Ensures fast loading of images
              className="w-full h-full object-contain rounded-lg" // ✅ `object-contain` for no cropping
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopComments;
