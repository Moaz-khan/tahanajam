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
  image:string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(card.className, "relative rounded-xl overflow-hidden")}
          onMouseEnter={() => setHovered(card.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick(card.id)}
          whileHover={{ scale: 1.05 }} // Hover Effect
          transition={{ duration: 0.3 }}>
          {/* Card Image */}
          <ImageComponent card={card} />

          {/* Hover Title and Project Type */}
          <AnimatePresence>
            {hovered === card.id && (
              <HoverInfo title={card.title} projectType={card.projectType} />
            )}
          </AnimatePresence>

          {/* Expanded Content (Click to Open) */}
          <AnimatePresence>
            {selected === card.id && <SelectedCard selected={card} />}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// 🔹 Image Component
const ImageComponent = ({ card }: { card: Card }) => (
  <div className="absolute inset-0 h-full w-full">
    {/* ✅ Desktop Image */}
    <motion.img
      src={card.thumbnail} // Desktop Image
      height="400"
      width="600"
      className="hidden md:block object-cover object-center h-full w-full rounded-lg"
      alt="Desktop Thumbnail"
    />

    {/* ✅ Mobile Image */}
    <motion.img
      src={card.image} // Mobile Image
      height="840"
      width="1020"
      className="block md:hidden object-fill h-full rounded-lg"
      alt="Mobile Image"
    />
  </div>
);

// 🔹 Hover Effect (Title & Project Type)
const HoverInfo = ({
  title,
  projectType,
}: {
  title: string;
  projectType: string;
}) => (
  <motion.div
    className="absolute w-full items-center bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2 }}>
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-xs opacity-80">{projectType}</p>
  </motion.div>
);

// 🔹 Click to Expand (Project Details)
const SelectedCard = ({ selected }: { selected: Card }) => (
  <Link
    href={`/work/${selected.slug}`}
    className="text-white text-lg font-semibold hover:underline">
    <motion.div
      className="absolute inset-0 bg-black bg-opacity-80 p-6 flex items-center justify-center text-white rounded-lg shadow-lg z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}>
      {selected.content}
    </motion.div>
  </Link>
);
