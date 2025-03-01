"use client";
import React, { useState, useEffect } from "react";

const comments = [
  {
    name: "Elena S.",
    role: "Marketing Director of Coinio",
    text: "Incredible work from Taha! He understood our vision from the get-go and translated it into a stunning brand identity and website design. His professionalism and prompt communication made the entire process seamless.",
  },
  {
    name: "Henry W.",
    role: "Team member of Sole Crafters",
    text: "Opting for our exclusive website design was a game-changer. His unique designs elevated our brand, captivating our audience with sophistication.",
  },
  {
    name: "Layla A.",
    role: "Founder of The Nectar",
    text: "Kudos to Taha for his exceptional label design work! He captured the essence of our brand effortlessly, delivering labels that are both visually appealing and informative.",
  },
  {
    name: "Adam B.",
    role: "Co-founder, Morphosys",
    text: "Selecting a design partner for our branding and website needs was pivotal. He delivered stunning designs that resonate with our customers.",
  },
  {
    name: "Yılmaz F.",
    role: "Founder, Oven Delights",
    text: "Thanks to Taha, our bakery's new branding and logo are simply irresistible! His creativity and precision brought our vision to life.",
  },
];

const bgDesktop = "/images/qoute2.png"; // High-quality for large screens
const bgMobile = "/images/qoute2.png"; // Compressed for mobile

function TopComments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [bgImage, setBgImage] = useState(bgDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgMobile); // Use smaller image on mobile
      } else {
        setBgImage(bgDesktop);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-black flex justify-center px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div
          className={`relative w-full max-w-[1100px] min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] shadow-lg rounded-xl flex items-center justify-center text-center transition-opacity duration-500 overflow-hidden ${
            fade ? "opacity-100" : "opacity-0"
          }`}>
          {/* Background Image Full Cover Fix */}
          <div className="absolute inset-0">
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover md:object-cover sm:object-cover"
            />
          </div>

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Comment Content */}
          <div className="relative z-10 bg-black bg-opacity-50 p-6 sm:p-10 rounded-lg text-start w-full max-w-[90%]">
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
              {comments[currentIndex].text}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {comments[currentIndex].name}
            </h3>
            <p className="text-sm sm:text-lg font-light text-gray-300">
              {comments[currentIndex].role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopComments;
