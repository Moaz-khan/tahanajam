"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => setIsHoveringLink(true);
    const handleMouseLeave = () => setIsHoveringLink(false);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-200 ease-out mix-blend-difference z-[99999] bg-white ${
        isHoveringLink ? "w-12 h-12 opacity-80" : "w-4 h-4 opacity-100"
      }`}
      style={{
        transform: `translate(${position.x - (isHoveringLink ? 24 : 8)}px, ${position.y - (isHoveringLink ? 24 : 8)}px)`,
      }}
    />
  );
};

export default CustomCursor;
