"use client";

import React, { useRef, useState } from "react";

const Promo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="my-24">
      <h3 className="text-center font-semibold text-4xl">Promo Video</h3>
      <div className="absolute top-[100rem] left-20">
<svg xmlns="http://www.w3.org/2000/svg" width={66} height={66} viewBox="0 0 66 66" fill="none">
  <g clipPath="url(#clip0_1_53)">
    <g filter="url(#filter0_f_1_53)">
      <path d="M58.5428 41.989L49.4691 45.4262C52.4791 41.4377 53.9477 36.4965 53.6047 31.5115C53.2617 26.5265 51.1302 21.833 47.6022 18.2944C44.0744 14.7558 39.3873 12.6101 34.4034 12.252C29.4195 11.8939 24.4738 13.3475 20.4763 16.3453C16.4787 19.3432 13.6981 23.6838 12.6459 28.5685C11.5937 33.4533 12.3408 38.5537 14.7496 42.9315C17.1585 47.3093 21.0671 50.6701 25.7565 52.3956C30.4459 54.1211 35.6006 54.0954 40.2725 52.323L59.6735 44.9738C60.0693 44.8238 60.3893 44.5228 60.5632 44.1369C60.737 43.751 60.7504 43.3119 60.6005 42.9161C60.4506 42.5203 60.1496 42.2002 59.7637 42.0264C59.3778 41.8525 58.9386 41.8391 58.5428 41.989ZM25.3823 40.0449C24.6444 40.3244 23.8402 40.3789 23.0713 40.2013C22.3025 40.0238 21.6035 39.6222 21.0629 39.0475C20.5223 38.4727 20.1642 37.7505 20.034 36.9722C19.9038 36.194 20.0073 35.3946 20.3315 34.6751C20.6556 33.9557 21.1858 33.3485 21.855 32.9304C22.5242 32.5123 23.3023 32.302 24.0911 32.3262C24.8798 32.3503 25.6436 32.6078 26.286 33.066C26.9284 33.5243 27.4204 34.1627 27.7 34.9007C28.0748 35.8902 28.0412 36.988 27.6066 37.9528C27.1719 38.9175 26.3718 39.6701 25.3823 40.0449ZM37.7285 45.6073C36.9906 45.8868 36.1864 45.9412 35.4176 45.7637C34.6487 45.5861 33.9498 45.1846 33.4091 44.6098C32.8685 44.035 32.5104 43.3129 32.3803 42.5346C32.2501 41.7563 32.3536 40.9569 32.6777 40.2375C33.0018 39.5181 33.532 38.9109 34.2012 38.4928C34.8704 38.0747 35.6486 37.8644 36.4373 37.8885C37.226 37.9126 37.9898 38.1701 38.6322 38.6284C39.2746 39.0866 39.7667 39.7251 40.0462 40.463C40.421 41.4525 40.3874 42.5504 39.9528 43.5151C39.5181 44.4799 38.7181 45.2324 37.7285 45.6073ZM30.9447 27.6987C30.2068 27.9782 29.4025 28.0326 28.6337 27.8551C27.8648 27.6776 27.1659 27.276 26.6253 26.7012C26.0846 26.1265 25.7266 25.4043 25.5964 24.626C25.4662 23.8477 25.5697 23.0484 25.8938 22.3289C26.2179 21.6095 26.7481 21.0023 27.4173 20.5842C28.0865 20.1661 28.8647 19.9558 29.6534 19.9799C30.4421 20.0041 31.206 20.2616 31.8483 20.7198C32.4907 21.1781 32.9828 21.8165 33.2623 22.5544C33.6371 23.5439 33.6035 24.6418 33.1689 25.6066C32.7343 26.5713 31.9342 27.3239 30.9447 27.6987ZM38.1466 30.9434C37.8671 30.2055 37.8127 29.4012 37.9902 28.6324C38.1678 27.8636 38.5693 27.1646 39.1441 26.624C39.7189 26.0833 40.441 25.7253 41.2193 25.5951C41.9976 25.4649 42.797 25.5684 43.5164 25.8925C44.2358 26.2167 44.843 26.7469 45.2611 27.4161C45.6792 28.0853 45.8895 28.8634 45.8654 29.6521C45.8412 30.4408 45.5838 31.2047 45.1255 31.8471C44.6673 32.4894 44.0288 32.9815 43.2909 33.261C42.3014 33.6359 41.2035 33.6023 40.2388 33.1676C39.274 32.733 38.5215 31.9329 38.1466 30.9434Z" fill="#007AFF" fillOpacity="0.5" />
    </g>
  </g>
  <defs>
    <filter id="filter0_f_1_53" x="3.17587" y="3.19354" width="66.5332" height="59.4828" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="4.50255" result="effect1_foregroundBlur_1_53" />
    </filter>
    <clipPath id="clip0_1_53">
      <rect width="51.0677" height="51.0677" fill="white" transform="translate(0 18.089) rotate(-20.747)" />
    </clipPath>
  </defs>
</svg>

      </div>
      <div className="absolute top-[110rem] left-40">
        <img src="./videocam.svg" alt="" />
      </div>
      <div className="absolute top-[118rem] right-32">
        <img src="./videocam.svg" alt="" className="h-56 w-56" />
      </div>
      <div className="flex justify-center items-center mt-10 relative">
        {/* Background blur div */}
        <div className="bg-[#007AFFF7] h-[120px] w-full blur-[250px] absolute "></div>

        {/* Video Container */}
        <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-lg ">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            preload="metadata"
            onClick={handlePlayPause}
            onEnded={() => setIsPlaying(false)} // Reset on video end
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center text-white text-lg cursor-pointer ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            } transition-opacity`}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <img src="./pause.svg" className="w-20" />
            ) : (
              <img src="./play.svg" className="w-16" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
