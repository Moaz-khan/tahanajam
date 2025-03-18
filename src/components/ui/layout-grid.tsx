"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
  projectType: string;
  slug: string;
  image: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            card.className,
            "relative rounded-xl overflow-hidden cursor-pointer",
          )}
          onMouseEnter={() => setHovered(card.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => (window.location.href = `/work/${card.slug}`)} // ✅ Click anywhere to navigate
          whileHover={{ scale: 1.05 }} // ✅ Hover Effect
          transition={{ duration: 0.3 }}>
          {/* Card Image */}
          <ImageComponent card={card} />

          {/* ✅ Skeleton Effect on Hover */}
          <AnimatePresence>
            {hovered === card.id && <SkeletonOverlay card={card} />}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// 🔹 Image Component
const ImageComponent = ({ card }: { card: Card }) => (
  <div className="absolute inset-0 h-full w-full">
    <motion.img
      src={card.thumbnail}
      height="400"
      width="600"
      className="hidden md:block object-cover object-center h-full w-full rounded-lg"
      alt="Desktop Thumbnail"
    />
    <motion.img
      src={card.image}
      height="840"
      width="1020"
      className="block md:hidden object-center h-full rounded-lg"
      alt="Mobile Image"
    />
  </div>
);

// 🔹 Hover Skeleton (Without Extra Line)
const SkeletonOverlay = ({ card }: { card: Card }) => (
  <motion.div
    className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white rounded-lg shadow-lg p-4"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}>
    <p className="text-2xl font-bold">{card.title}</p>
    <p className="text-lg opacity-80">{card.projectType}</p>
  </motion.div>
);
