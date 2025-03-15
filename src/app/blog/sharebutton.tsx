"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ShareButtonProps {
  postUrl: string;
}

export default function ShareButton({ postUrl }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const encodedUrl = encodeURIComponent(postUrl);
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedUrl}`,
  };

  return (
    <>
      {/* ✅ Share Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-black px-4 py-2 rounded-lg">
        <BsThreeDotsVertical
          size={15}
          className=" hover:text-gray-700 transition"
        />
      </button>

      {/* ✅ Share Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Share this Post</h3>

            <div className="flex gap-4 justify-center">
              <Link href={socialLinks.facebook} target="_blank">
                <FaFacebookF
                  size={24}
                  className="text-blue-600 hover:text-blue-800"
                />
              </Link>
              <Link href={socialLinks.twitter} target="_blank">
                <FaXTwitter
                  size={24}
                  className="text-black hover:text-gray-700"
                />
              </Link>
              <Link href={socialLinks.linkedin} target="_blank">
                <FaLinkedinIn
                  size={24}
                  className="text-blue-800 hover:text-blue-900"
                />
              </Link>
              <Link href={socialLinks.whatsapp} target="_blank">
                <FaWhatsapp
                  size={24}
                  className="text-green-500 hover:text-green-700"
                />
              </Link>
            </div>

            {/* ✅ Copy Link Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(postUrl);
                alert("Link copied!");
              }}
              className="mt-4 w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition">
              Copy Link
            </button>

            {/* ✅ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
