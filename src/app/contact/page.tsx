import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | TN Design Studio",
};

const ScrollEffect = dynamic(() => import("../component/ScrollEffect"), {
  ssr: false,
});

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row cursor-none">
      {/* Left Section (Content) */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-16 py-10 flex flex-col justify-center">
        <ScrollEffect>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {`Reach Out`}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-2">
            {`Let's connect and discuss your project.`}
          </p>

          <div className="pt-10 cursor-none">
            <Link
              href="tel:+447553296029"
              className="block text-lg sm:text-xl md:text-2xl text-gray-500 hover:text-white duration-150 cursor-none">
              {`+44 7553 296029`}
            </Link>
            <Link
              href="mailto:hello@tahanajam.co"
              className="block text-lg sm:text-xl md:text-2xl text-gray-500 hover:text-white duration-150 mt-2 cursor-none">
              {`hello@tahanajam.co`}
            </Link>
          </div>
        </ScrollEffect>
      </div>

      {/* Right Section (Shadow Effect Contact Form) */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6">
        <div className="relative w-full max-w-md p-8 rounded-2xl bg-black">
          {/* Inner Card Content */}
          <div className="relative bg-black text-white rounded-2xl p-6 border-2 border-white/30">
            <form
              action={"https://formspree.io/f/xaneyoew"}
              method="POST"
              className="space-y-6 cursor-none">
              {/* Name Input */}
              <div>
                <input
                  name="name"
                  type="text"
                  className="w-full p-3 bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none rounded-full transition-all duration-300 shadow-inner hover:shadow-lg"
                  placeholder="Full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  name="email"
                  type="email"
                  className="w-full p-3 bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none rounded-full transition-all duration-300 shadow-inner hover:shadow-lg"
                  placeholder="Email"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="massage"
                  rows={4}
                  className="w-full p-3 bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none rounded-lg transition-all duration-300 shadow-inner hover:shadow-lg"
                  placeholder="Message..."></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-3 font-normal hover:shadow-[0_4px_20px_rgb(255,255,255,0.4)] transition transform duration-300 rounded-full cursor-none">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
