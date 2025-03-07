"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "relative")}>
          <motion.div
            onClick={() => handleClick(card.id)}
            className="relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out bg-white bg-opacity-10 backdrop-blur-xl h-full w-full hover:scale-105 hover:shadow-xl">
            {/* Card Image */}
            <ImageComponent card={card} />

            {/* Expanded Content (Inside Card) */}
            <AnimatePresence>
              {selected === card.id && <SelectedCard selected={card} />}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="400"
      width="600"
      className="object-cover object-center absolute inset-0 h-full w-full rounded-lg"
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 rounded-lg shadow-lg z-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}>
      {selected?.content}
    </motion.div>
  );
};
