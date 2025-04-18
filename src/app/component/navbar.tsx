"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white body-font relative cursor-none">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-24">
        {/* Logo Left Side */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="tahanajam"
            width={500}
            height={100}
            className="h-[100px] max-w-[120px] md:max-w-[170px] cursor-none"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-around items-center text-base font-medium gap-6">
          {["Work", "About", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="mr-5 text-lg hover:text-white duration-300 cursor-none">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Right Side */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Full Page Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white">
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center space-y-6 text-white text-xl">
          {["Work", "About", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
