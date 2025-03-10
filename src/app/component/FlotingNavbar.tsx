"use client";

import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";

export function FlotingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div className="relative w-full flex justify-center items-center lg:block md:block sm:hidden">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
