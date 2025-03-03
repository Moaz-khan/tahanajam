"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white body-font relative">
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
            href="/work"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            Work
          </Link>
          <Link
            href="/about"
            className="mr-5 text-lg hover:text-gray-600 duration-300">
            About
          </Link>
          <Link
            href="/contact"
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
          <Link
            href="/work"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400">
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400">
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400">
            Contact
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
