import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-center text-[#FFFFFF99]">
        Share your post on social media using:
      </p>
      <h2 className="text-center text-4xl font-bold">#LoremVideo</h2>

      <div className="flex items-center justify-around text-[#FFFFFF99] mt-10">
        <div>
          <p>&#169;copyright all rights reserved</p>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/pages/terms">
            <p>Terms & Conditions</p>
          </Link>
          <p>|</p>
          <Link href="/pages/judge">
            <p>Judging Panel</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
