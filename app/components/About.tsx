import React from "react";

const About = () => {
  return (
    <div>
      <div className="px-8 md:px-24 lg:px-32 gap-10 md:gap-32 flex flex-wrap text-white justify-center items-start">
        <div className="absolute top-[47rem] left-20">
          <img src="./videocam.svg" alt="" className="w-28 h-28" />
        </div>
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          className="flex-grow rounded-lg pb-32 pt-10 ps-8 pe-8 md:ps-10 md:pe-32"
        >
          <p className="text-[#FFFFFFCC] whitespace-nowrap">Prize Amount</p>
          <h3 className="text-[#439EF4] font-bold text-3xl">$5000</h3>
          <br />
          <p className="text-[#FFFFFFCC] whitespace-nowrap">
            Minimum Participants
          </p>
          <h3 className="text-[#FFFFFFCC] text-3xl">09</h3>
          <br />
          <p className="text-[#FFFFFFCC] whitespace-nowrap">
            Submission Deadline
          </p>
          <h3 className="text-[#FFFFFFCC] text-3xl">10 Oct'24</h3>
          <div className="absolute top-[66rem] left-[28rem]">
         <svg xmlns="http://www.w3.org/2000/svg" width={130} height={130} viewBox="0 0 130 130" fill="none">
  <g clipPath="url(#clip0_1_97)">
    <g filter="url(#filter0_f_1_97)">
      <path d="M117.267 109.223H92.812C103.467 102.509 111.34 92.1745 114.982 80.119C118.625 68.0635 117.791 55.0982 112.636 43.6082C107.48 32.1182 98.3487 22.8762 86.9217 17.5825C75.4946 12.2887 62.5404 11.2991 50.4418 14.7958C38.3433 18.2925 27.9143 26.0402 21.0732 36.6138C14.2321 47.1874 11.4391 59.8756 13.2079 72.3445C14.9768 84.8133 21.1885 96.2242 30.7005 104.478C40.2125 112.732 52.3849 117.273 64.9786 117.267H117.267C118.333 117.267 119.356 116.843 120.111 116.089C120.865 115.334 121.289 114.311 121.289 113.245C121.289 112.178 120.865 111.155 120.111 110.401C119.356 109.646 118.333 109.223 117.267 109.223ZM40.8456 75.0341C38.8568 75.0341 36.9127 74.4444 35.2591 73.3395C33.6055 72.2346 32.3167 70.6641 31.5556 68.8268C30.7945 66.9894 30.5954 64.9676 30.9834 63.017C31.3714 61.0664 32.3291 59.2747 33.7354 57.8685C35.1416 56.4622 36.9333 55.5045 38.8839 55.1165C40.8344 54.7285 42.8563 54.9277 44.6936 55.6887C46.531 56.4498 48.1015 57.7386 49.2064 59.3922C50.3113 61.0458 50.901 62.9899 50.901 64.9787C50.901 67.6456 49.8416 70.2032 47.9558 72.089C46.0701 73.9747 43.5125 75.0341 40.8456 75.0341ZM64.9786 99.1671C62.9898 99.1671 61.0457 98.5774 59.3921 97.4725C57.7385 96.3676 56.4497 94.7971 55.6886 92.9597C54.9275 91.1223 54.7284 89.1005 55.1164 87.15C55.5044 85.1994 56.4621 83.4077 57.8683 82.0014C59.2746 80.5952 61.0663 79.6375 63.0169 79.2495C64.9674 78.8615 66.9892 79.0606 68.8266 79.8217C70.664 80.5828 72.2344 81.8716 73.3393 83.5252C74.4442 85.1788 75.034 87.1229 75.034 89.1117C75.034 91.7785 73.9746 94.3362 72.0888 96.2219C70.2031 98.1077 67.6454 99.1671 64.9786 99.1671ZM64.9786 50.9011C62.9898 50.9011 61.0457 50.3114 59.3921 49.2065C57.7385 48.1016 56.4497 46.5312 55.6886 44.6938C54.9275 42.8564 54.7284 40.8346 55.1164 38.884C55.5044 36.9335 56.4621 35.1418 57.8683 33.7355C59.2746 32.3292 61.0663 31.3715 63.0169 30.9835C64.9674 30.5956 66.9892 30.7947 68.8266 31.5558C70.664 32.3168 72.2344 33.6056 73.3393 35.2593C74.4442 36.9129 75.034 38.857 75.034 40.8457C75.034 43.5126 73.9746 46.0702 72.0888 47.956C70.2031 49.8417 67.6454 50.9011 64.9786 50.9011ZM79.0562 64.9787C79.0562 62.9899 79.6459 61.0458 80.7508 59.3922C81.8557 57.7386 83.4261 56.4498 85.2635 55.6887C87.1009 54.9277 89.1227 54.7285 91.0733 55.1165C93.0238 55.5045 94.8155 56.4622 96.2218 57.8685C97.6281 59.2747 98.5858 61.0664 98.9738 63.017C99.3617 64.9676 99.1626 66.9894 98.4015 68.8268C97.6405 70.6641 96.3516 72.2346 94.698 73.3395C93.0444 74.4444 91.1003 75.0341 89.1116 75.0341C86.4447 75.0341 83.8871 73.9747 82.0013 72.089C80.1156 70.2032 79.0562 67.6456 79.0562 64.9787Z" fill="#007AFF" fillOpacity="0.28" />
    </g>
  </g>
  <defs>
    <filter id="filter0_f_1_97" x="2.68973" y="2.74084" width="128.599" height="124.526" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation={5} result="effect1_foregroundBlur_1_97" />
    </filter>
    <clipPath id="clip0_1_97">
      <rect width="128.709" height="128.709" fill="white" transform="translate(0.623962 0.623962)" />
    </clipPath>
  </defs>
</svg>

          </div>
        </div>

        <div className="flex-grow-2 max-w-full md:max-w-2xl">
          <h4 className="text-4xl font-bold mb-4">
            What is Lorem Video <br /> Contest 2024?
          </h4>
          <p className="text-[#FFFFFF99] text-base leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            numquam recusandae magnam quia ducimus quis laboriosam odio amet
            blanditiis soluta, iusto deserunt itaque illo aliquid inventore
            consequuntur ab asperiores! Alias officia doloribus atque similique
            eveniet sapiente in esse ad distinctio.
          </p>
          <p className="text-[#FFFFFF99] text-base leading-relaxed mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            repudiandae officiis tempora voluptates, architecto eaque cupiditate
            iure cum, libero animi sint eligendi ratione labore quisquam
            molestias autem commodi atque enim.
          </p>
          <button className="p-4 mt-5 text-white font-bold uppercase rounded-lg bg-[#439EF4]">
            Enter the Contest
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
