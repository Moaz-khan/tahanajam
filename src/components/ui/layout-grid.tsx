"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?: string; // Title field added
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [hovered, setHovered] = useState<Card | null>(null); // Hover state added

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(card.className, "relative")}
          onMouseEnter={() => setHovered(card)}
          onMouseLeave={() => setHovered(null)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out",
              selected?.id === card.id
                ? "cursor-pointer absolute inset-0 h-1/4 w-3/4 md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col border border-gray-500 shadow-xl"
                : lastSelected?.id === card.id
                ? "z-40 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl h-full w-full border border-gray-700 shadow-lg"
                : "bg-white bg-opacity-10 backdrop-blur-xl rounded-xl h-full w-full hover:scale-105 hover:shadow-xl transition",
            )}
            layoutId={`card-${card.id}`}>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />

            {/* Hover Title */}
            {hovered?.id === card.id && !selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 left-0 right-0 text-white text-center text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-lg">
                {card.title || "Untitled"}
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
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
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full rounded-lg",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-4 pb-2 z-[70]">
        {selected?.content}
      </motion.div>
    </div>
  );
};
