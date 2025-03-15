"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Comment {
  name: string;
  role: string;
  text: string;
}

const bgDesktop = "/images/qoute2.png"; // High-quality for large screens
const bgMobile = "/images/qoute2-min.png"; // Compressed for mobile

function TopComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [bgImage, setBgImage] = useState(bgDesktop);

  // ✅ Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`,
        );
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data: Comment[] = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  // ✅ Handle Background Image on Resize
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? bgMobile : bgDesktop);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Auto-Sliding Comments
  useEffect(() => {
    if (comments.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [comments]);

  if (comments.length === 0) {
    return <p className="text-white text-center">Loading comments...</p>;
  }

  return (
    <section className="py-10 bg-black flex justify-center px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div
          className={`relative w-full max-w-full min-h-[250px] sm:min-h-[850px] md:min-h-[400px] lg:min-h-[450px] shadow-lg rounded-xl flex items-center justify-center text-center transition-opacity duration-500 overflow-hidden ${
            fade ? "opacity-100" : "opacity-0"
          }`}>
          {/* Background Image Full Cover Fix */}
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt="Background"
              width={500}
              height={500}
              className="min-w-7xl max-h-6xl lg:min-w-6xl md:min-w-6xl lg:min-h-6xl md:min-h-6xl object-contain"
            />
          </div>

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Comment Content */}
          {/* Comment Content */}
          <div className="relative z-10 p-6 sm:p-8 rounded-lg w-full max-w-[90%]">
            <p className="text-white text-xs lg:text-2xl md:text-2xl leading-snug mb-6 text-center sm:text-left">
              {comments[currentIndex].text}
            </p>
            <h3 className="text-xs lg:text-xl md:text-xl font-semibold text-white text-center sm:text-left">
              {comments[currentIndex].name}
            </h3>
            <p className="text-xs md:text-lg lg:text-lg font-light text-gray-300 text-center sm:text-left">
              {comments[currentIndex].role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopComments;
