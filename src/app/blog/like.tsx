"use client";

import { useState, useEffect } from "react";

interface Props {
  postId: string;
}
const Url = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LikeButton({ postId }: Props) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await fetch(`${Url}/like?postId=${postId}`);
      const data = await res.json();
      setLikes(data.likes);
    };

    fetchLikes();
  }, [postId]);

  const handleLikeToggle = async () => {
    if (isLiked) {
      await fetch(`${Url}/like`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      setLikes((prev) => Math.max(0, prev - 1));
    } else {
      await fetch(`${Url}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      setLikes((prev) => prev + 1);
    }

    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLikeToggle}
      className="flex items-center space-x-2 px-4 py-2 rounded-md transition">
      <span className={`text-md ${isLiked ? "text-red-500" : "text-gray-400"}`}>
        {isLiked ? "❤️" : "🤍"}
      </span>
      <span>{likes} Likes</span>
    </button>
  );
}
