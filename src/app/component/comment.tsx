"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Comment {
  image: string;
}

function TopComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [comments]);

  // ✅ Manual Navigation
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  if (comments.length === 0) {
    return <p className="text-white text-center">Loading images...</p>;
  }

  return (
    <section className="py-8 sm:py-10 bg-black flex justify-center px-2 sm:px-4 relative cursor-none">
      <div className="container mx-auto flex flex-col items-center relative">
        {/* ✅ Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-4 sm:p-5 rounded-full shadow-md z-10 cursor-none">
          <FaChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 text-black hover:text-white/70" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-4 sm:p-5 rounded-full shadow-md z-10 cursor-none">
          <FaChevronRight className="w-7 h-7 sm:w-8 sm:h-8 text-black hover:text-white/70" />
        </button>

        {/* ✅ Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-opacity-10 backdrop-blur-lg shadow-lg rounded-xl flex items-center justify-center text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}>
            {/* ✅ Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={comments[currentIndex].image}
                alt="Carousel Image"
                width={800}
                height={600}
                quality={100}
                priority
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ✅ Pagination Dots */}
        <div className="flex gap-2 mt-3 sm:mt-4">
          {comments.slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border border-white rounded-full transition duration-300  cursor-none ${
                currentIndex === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopComments;
