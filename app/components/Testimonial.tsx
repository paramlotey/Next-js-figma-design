// import * as React from "react";

import TestimonialClient from "./Test";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Testimonial() {
//   return (
//     <>


//       <div className="flex justify-center items-center ">
//         <Carousel
//           opts={{
//             align: "center",
//           }}
//         >
//           <CarouselContent className="gap-10">
//             <CarouselItem
//               className="md:basis-1/2 lg:basis-1/3 rounded-md"
//               style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
//             >

//             </CarouselItem>

//             <CarouselItem
//               className="md:basis-1/2 lg:basis-1/3 rounded-md"
//               style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
//             >

//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious className="absolute left-[49%] top-3/4 bg-[#439EF4]  " />
//           <CarouselNext className="absolute left-[51%] top-3/4   bg-[#dcdfe2]" />
//         </Carousel>
//       </div>
//     </>
//   );
// }
 // Adjust the path accordingly

const Testimonial = () => {
  return (
    <div>
      <h3 className="text-center text-4xl text-white font-bold">
         Testimonials
       </h3>
      <TestimonialClient/>
    </div>
  );
};

export default Testimonial;
