"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./Logo.png" className="h-8" alt="Logo" />
          </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/rules"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                >
                  Rules and Guidlines
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/submission"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                >
                  Submission
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/judge"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                >
                  Judging Panel
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/gallery"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/winner"
                  className="inline-block py-2 px-3 md:p-0 text-white opacity-75 relative focus:outline-none focus:opacity-100 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-[#439EF4] after:scale-x-0 after:origin-center focus:after:scale-x-100 focus:after:transition-transform focus:after:duration-300"
                >
                  Winner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
