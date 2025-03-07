"use client";
import React, { useState, useEffect } from "react";
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
  const [selected, setSelected] = useState<Card | null>(null);
  const [hovered, setHovered] = useState<Card | null>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!closing) return;
    const timeout = setTimeout(() => {
      setSelected(null);
      setClosing(false);
    }, 300); // Exit animation ke liye delay
    return () => clearTimeout(timeout);
  }, [closing]);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      setClosing(true);
    } else {
      setClosing(true); // Pahle close hone do
      setTimeout(() => setSelected(card), 350); // Phir naye ko open karo
    }
  };

  const handleOutsideClick = () => setClosing(true);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div
          key={card.id}
          className={cn(card.className, "relative")}
          onMouseEnter={() => setHovered(card)}
          onMouseLeave={() => setHovered(null)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out",
              selected?.id === card.id
                ? "cursor-pointer fixed inset-0 m-auto z-50 flex justify-center items-center flex-wrap flex-col border border-gray-500 shadow-xl"
                : "bg-white bg-opacity-10 backdrop-blur-xl rounded-xl h-full w-full hover:scale-105 hover:shadow-xl transition",
            )}
            layoutId={`card-${card.id}`}>
            <ImageComponent card={card} />
            <AnimatePresence mode="wait">
              {selected?.id === card.id && <SelectedCard selected={selected} />}
            </AnimatePresence>

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
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={handleOutsideClick}
            className="absolute h-full w-full left-0 top-0 bg-black opacity-30 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
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

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <motion.div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        className="relative px-4 pb-2 z-[70]">
        {selected?.content}
      </motion.div>
    </motion.div>
  );
};
