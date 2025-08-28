import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 px-6 py-12 cursor-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-start lg:text-left">
          <div>
            <h1 className="text-white text-base sm:text-lg font-medium">
              Have a project in mind?
            </h1>
            <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl">
              {`Let's talk.`}
            </h1>
          </div>

          {/* Book a Call button */}
          <Link
            href="https://calendly.com/hello-tahanajam/30min"
            target="_blank">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-gray-200 transition cursor-none">
              Book a Call
            </button>
          </Link>
        </div>

        {/* Right Section → Row layout */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 text-start lg:text-left">
          {/* Studio */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-lg">Studio</h2>
            <div className="flex flex-col gap-1">
              <Link
                href="/work"
                className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
                Work
              </Link>
              <Link
                href="/about"
                className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
                About
              </Link>
              <Link
                href="/contact"
                className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
                Blog
              </Link>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-lg">Contact</h2>
            <Link
              href="tel:+447428698718"
              className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
              +44 7428 698718
            </Link>
            <Link
              href="mailto:hello@tahanajam.co"
              className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
              hello@tahanajam.co
            </Link>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-lg">Social</h2>
            <Link
              href="https://www.linkedin.com/in/taha-najam-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm sm:text-base hover:text-gray-400 transition cursor-none">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
