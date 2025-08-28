import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 p-6 pb-10 sm:p-10 cursor-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6">
        {/* Left Side: Heading */}
        <div className="text-left">
          <h1 className="text-white text-base sm:text-lg font-medium">
            Have a project in mind?
          </h1>
          <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            {`Let's talk.`}
          </h1>
        </div>

        {/* Contact Section */}
        <div className="text-right">
          <Link
            href="tel:+447428698718"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            +44 7428 698718
          </Link>
          <br />
          <Link
            href="https://calendly.com/hello-tahanajam/30min"
            target="_blank"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            Book a Call
          </Link>
          <br />
          <Link
            href="mailto:hello@tahanajam.co"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            hello@tahanajam.co
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="/work"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            Work
          </Link>
          <Link
            href="/about"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            About
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            Blog
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <Link
            href="https://www.linkedin.com/in/taha-najam-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm sm:text-lg font-normal hover:text-gray-400 transition cursor-none">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
