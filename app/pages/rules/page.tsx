import Link from "next/link";
import React from "react";

const RulesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-white">
      <h1 className="text-5xl font-bold mb-4">📜 Rules 📜</h1>
      <p className="text-2xl italic text-center max-w-xl">
        The page you're looking for is currently under development. Stay tuned
        for updates!
      </p>
      <div className="mt-10 flex space-x-4">
        <Link href="/">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition">
            Go Home
          </button>
        </Link>
        <Link href="/">
          <button className="px-6 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-600 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RulesPage;
