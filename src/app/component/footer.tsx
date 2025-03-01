import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6">
        {/* Left Side: Heading */}
        <div className="text-left">
          <h1 className="text-white text-base sm:text-lg font-semibold">
            Have a project in mind?
          </h1>
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
            {`Let's talk.`}
          </h1>
        </div>

        {/* Contact Section */}
        <div className="text-right">
          <Link
            href="tel:+447553296029"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            +44 7553 296029
          </Link>
          <br />
          <Link
            href="mailto:hello@tahanajam.co"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            hello@tahanajam.co
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="/work"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            Work
          </Link>
          <Link
            href="/about"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            About
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <Link
            href="https://www.linkedin.com/in/tahanajam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm sm:text-lg font-semibold hover:text-gray-400 transition">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
