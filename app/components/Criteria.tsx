import React from "react";

const Criteria = () => {
  return (
    <div className="mt-28">
      {/* Wrapping the heading and the flex container in a parent container */}
      <div className="text-center">
        <h3 className="text-4xl  text-white font-semibold mb-6">
          Judging Criteria
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4  text-[#ffffffc8]">
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          className="px-8 py-6 rounded-lg w-56"
        >
          <p className="mb-2">
            Quality of Content
          </p>
          <h5 className="text-2xl">HD</h5>
        </div>
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          className="px-8 py-6 rounded-lg w-56 "
        >
          <p className="mb-2">
            Video Production
          </p>
          <h5 className="text-2xl">Premium</h5>
        </div>
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          className="px-8 py-6 rounded-lg w-56 "
        >
          <p className="mb-2">
            Sound Quality
          </p>
          <h5 className="text-2xl">Good</h5>
        </div>
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          className="px-8 py-6 rounded-lg  w-56 "
        >
          <p className="mb-2">
            Social Media Upload
          </p>
          <h5 className="text-2xl">3+ Platforms</h5>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
