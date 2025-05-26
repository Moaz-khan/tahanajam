// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function NotFound() {
  const errorText = "404";

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {/* Animated 404 Letters */}
      <div className="flex space-x-4 text-7xl font-extrabold mb-4">
        {errorText.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariant}
            initial="hidden"
            animate="visible">
            {char}
          </motion.span>
        ))}
      </div>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}>
        Oops! Page not found. Maybe go back home?
      </motion.p>

      {/* Animated Button */}
      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 15px rgba(255,255,255,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}>
        <Link
          href="/"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100">
          Go to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
