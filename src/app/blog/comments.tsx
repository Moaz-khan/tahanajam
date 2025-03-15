"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Comment {
  _id: string;
  name: string;
  text: string;
  createdAt: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Url = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    async function fetchComments() {
      if (!Url) return; // Agar Url undefined ho toh request na bhejo
      const res = await fetch(`${Url}/api/comment?postId=${postId}`);
      const data = await res.json();
      setComments(data);
    }
    fetchComments();
  }, [postId, Url]); // ✅ Url ko dependency array me add kar diya

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    setLoading(true);
    const res = await fetch(`${Url}/api/add-comment`, {
      method: "POST",
      body: JSON.stringify({ postId, name, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setName("");
      setText("");
      const newComment = await res.json();
      setComments((prev) => [
        {
          _id: Date.now().toString(),
          name,
          text,
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);
      console.log(newComment);
    }
    setLoading(false);
    setExpanded(false);
  };

  return (
    <div className="mt-6 p-4 md:p-6 rounded-lg bg-white w-full max-w-2xl mx-auto">
      {/* Heading */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        Comments
      </h3>
      <div className="bg-gray-300 my-3 h-[1px]"></div>

      {/* Comment Input Field */}
      <textarea
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-black transition-all duration-200 text-sm md:text-base"
        onFocus={() => setExpanded(true)}
      />

      {/* Name & Submit Button */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: expanded ? 1 : 0, height: expanded ? "auto" : 0 }}
        className="overflow-hidden transition-all duration-300">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-md mt-2 bg-white focus:ring-2 focus:ring-black transition-all duration-200 text-sm md:text-base"
        />
        <button
          type="submit"
          onClick={handleCommentSubmit}
          className="mt-3 px-4 py-2 bg-black text-white rounded-md w-full text-sm md:text-base font-medium hover:bg-gray-900 transition-all duration-200 disabled:bg-gray-500"
          disabled={loading}>
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </motion.div>

      {/* Comments List */}
      <div className="mt-4 space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm md:text-base">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="p-3 md:p-4 border rounded-md bg-gray-100 shadow-sm">
              <p className="font-semibold text-sm md:text-base text-gray-900">
                {comment.name}
              </p>
              <p className="text-sm md:text-base text-gray-700">
                {comment.text}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
