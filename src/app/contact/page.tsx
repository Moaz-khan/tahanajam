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
    <ScrollEffect>
      <div className="text-start px-6 sm:px-10 lg:px-16 py-10 bg-black text-white h-auto min-h-screen flex flex-col justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {`Reach Out`}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-2">
          {`Let's connect and discuss your project.`}
        </p>

        <div className="pt-10">
          <Link
            href="tel:+447553296029"
            className="block text-lg sm:text-xl md:text-2xl text-gray-500 hover:text-white duration-150">
            {`+44 7553 296029`}
          </Link>
          <Link
            href="mailto:hello@tahanajam.co"
            className="block text-lg sm:text-xl md:text-2xl text-gray-500 hover:text-white duration-150 mt-2">
            {`hello@tahanajam.co`}
          </Link>
        </div>
      </div>
    </ScrollEffect>
  );
}

export default Page;
