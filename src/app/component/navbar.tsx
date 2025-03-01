"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white body-font">
      <div className="container mx-auto flex justify-between items-center p-5 px-6 md:px-16">
        {/* Logo Left Side */}
        <Link
          href="/"
          className="text-2xl font-medium hover:text-gray-600 duration-300">
          Taha Najam
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-base">
          <Link
            href="#work"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            Work
          </Link>
          <Link
            href="/"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            About
          </Link>
          <Link
            href="/"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            Contact
          </Link>
          <Link
            href="/"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button - Right Side */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Right Side Slide In */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white">
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center mt-16 space-y-6">
          <Link
            href="#work"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-600">
            Work
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-600">
            About
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-600">
            Contact
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-600">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
