/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ Sanity ke images ke liye domain allow
  },
};

export default nextConfig;
