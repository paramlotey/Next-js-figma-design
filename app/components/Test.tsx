"use client";

import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

const TestimonialClient = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-64 pt-10">
      <Carousel responsive={responsive} showDots={true} itemClass="carousel-item">
        <div>
          <div
            className="rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
          >
            <div className="ps-6 pe-12 py-6">
              <img src="./Ellipse 10.svg" alt="" />
              <h5 className="text-[#FFFFFF99] font-bold">James Thompson</h5>
              <h5 className="text-[#FFFFFF99]">-Austin,Tx</h5>
              <p className="text-[#FFFFFFDE]">
                "Winning this video contest has been an incredible experience! I
                never imagined that my video would resonate with so many people.
                The competition was tough, with so many talented creators
                submitting amazing work, but I'm thrilled to have been
                recognized. Thank you to everyone who voted and supported me
                throughout this journey!"
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
          >
            <div className="ps-6 pe-12 py-6">
              <img src="./Ellipse 9.svg" alt="" />
              <h5 className="text-[#FFFFFF99] font-bold">Sarah Mitchell</h5>
              <h5 className="text-[#FFFFFF99]">-Chicago,IL</h5>
              <p className="text-[#FFFFFFDE]">
                "Participating in this contest was an amazing challenge, and
                winning feels surreal. I put a lot of effort into creating
                something unique and meaningful, and to have that effort
                recognized is truly rewarding. This victory has opened up new
                doors for me, and I’m excited to see where this journey takes me
                next. Thanks to all who made ..."
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
          >
            <div className="ps-6 pe-12 py-6">
              <img src="./Ellipse 8.svg" alt="" />
              <h5 className="text-[#FFFFFF99] font-bold">Emily Rivera</h5>
              <h5 className="text-[#FFFFFF99]">-Los Angeles, CA</h5>
              <p className="text-[#FFFFFFDE]">
                "I’m beyond excited to have won this contest! It was such a fun
                project to work on, and I’m so grateful for the opportunity to
                share my passion with a wider audience. Winning has given me a
                huge confidence boost and the motivation to keep pursuing my
                dreams in video production. A big thank you to the organizers
                and everyone who believed in me!"
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
          >
            <div className="ps-6 pe-12 py-6">
              <img src="./Ellipse 9.svg" alt="" />
              <h5 className="text-[#FFFFFF99] font-bold">Sarah Mitchell</h5>
              <h5 className="text-[#FFFFFF99]">-Chicago,IL</h5>
              <p className="text-[#FFFFFFDE]">
                "Participating in this contest was an amazing challenge, and
                winning feels surreal. I put a lot of effort into creating
                something unique and meaningful, and to have that effort
                recognized is truly rewarding. This victory has opened up new
                doors for me, and I’m excited to see where this journey takes me
                next. Thanks to all who made ..."
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialClient;
