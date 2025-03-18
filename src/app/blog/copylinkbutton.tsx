"use client";

import { FaLink } from "react-icons/fa6";
import { useState } from "react";

const CopyLinkButton = () => {
  const [, setCopied] = useState(false);

  // ✅ Client-side URL directly access
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // ✅ Copy to Clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center text-black transition">
      <FaLink className="text-lg cursor-none" />
    </button>
  );
};

export default CopyLinkButton;
