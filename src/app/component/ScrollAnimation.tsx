"use client";

import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?:
    | "fade-up"
    | "parallax"
    | "rotate-scale"
    | "slide-fade"
    | "bounce";
  stagger?: boolean;
}

const ScrollAnimation = ({
  children,
  className = "",
  animationType = "fade-up",
  stagger = false,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : `scroll-${animationType}`} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
