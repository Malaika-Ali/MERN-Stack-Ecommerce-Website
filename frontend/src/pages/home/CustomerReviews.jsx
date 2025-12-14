// import { useState } from "react"
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";
// import RatingStars from "../../components/products/RatingStars";
// import SectionHeading from "../../components/headings/SectionHeading";
// import { testimonials } from "../../constants";


// export default function CustomerReviews() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="bg-gray-100 container mx-auto rounded-xl flex items-center py-12 px-4 my-8">
//       <div className="max-w-7xl mx-auto px-4 py-4 w-full">
//         <div className="flex justify-between items-center mb-8">
//           {/* <h2 className="text-2xl font-[500] text-gray-900">Our Customers Feedback</h2> */}
//           <SectionHeading title="Our Customers Feedback"/>
//           <div className="flex gap-2">
//             <button
//               onClick={prevSlide}
//               className="rounded-full w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 flex justify-center items-center"
//             >
//               <MdKeyboardArrowLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="rounded-full w-10 h-10 bg-black-color border border-gray-300 text-white hover:bg-stone-700 flex justify-center items-center transition-all duration-500 ease-linear"
//             >
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-6"
//             style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Adjust translateX based on the number of testimonials per slide
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0"
//                 style={{ flex: "0 0 calc(33.333% - 16px)" }} // Ensure each testimonial takes up 1/3 of the container width
//               >
//                 <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
//                   <div className="flex justify-start">
//                     <RatingStars rating={testimonial.rating} />
//                   </div>
//                   <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pt-5">{testimonial.text}</p>
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={testimonial.author.image || "/placeholder.svg"}
//                       alt={testimonial.author.name}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-900">{testimonial.author.name}</div>
//                       <div className="text-sm text-gray-500">From {testimonial.author.city}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import RatingStars from "../../components/products/RatingStars";
// import SectionHeading from "../../components/headings/SectionHeading";
// import { testimonials } from "../../constants";

// export default function CustomerReviews() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//   };

//   // Calculate the number of testimonials per slide based on screen size
//   const testimonialsPerSlide = window.innerWidth < 768 ? 2 : 3;

//   return (
//     <div className="bg-gray-100 container mx-auto rounded-xl flex items-center py-12 px-4 my-8">
//       <div className="max-w-7xl mx-auto px-4 py-4 w-full">
//         <div className="flex justify-between items-center mb-8">
//           <SectionHeading title="Our Customers Feedback" />
//           <div className="flex gap-2">
//             <button
//               onClick={prevSlide}
//               className="rounded-full w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 flex justify-center items-center"
//             >
//               <MdKeyboardArrowLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="rounded-full w-10 h-10 bg-black-color border border-gray-300 text-white hover:bg-stone-700 flex justify-center items-center transition-all duration-500 ease-linear"
//             >
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-6"
//             style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerSlide)}%)` }} // Adjust translateX based on the number of testimonials per slide
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0"
//                 style={{ flex: `0 0 calc(${100 / testimonialsPerSlide}% - 16px)` }} // Ensure each testimonial takes up the correct width
//               >
//                 <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
//                   <div className="flex justify-start">
//                     <RatingStars rating={testimonial.rating} />
//                   </div>
//                   <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pt-5">{testimonial.text}</p>
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={testimonial.author.image || "/placeholder.svg"}
//                       alt={testimonial.author.name}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-900">{testimonial.author.name}</div>
//                       <div className="text-sm text-gray-500">From {testimonial.author.city}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import RatingStars from "../../components/products/RatingStars";
import SectionHeading from "../../components/headings/SectionHeading";
import { testimonials } from "../../constants";

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(3); // Default to 3 testimonials per slide

  // Update the number of testimonials per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerSlide(2); // 2 testimonials on smaller screens
      } else {
        setTestimonialsPerSlide(3); // 3 testimonials on larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - testimonialsPerSlide ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - testimonialsPerSlide : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100  max-w-7xl mx-4 lg:mx-auto rounded-xl flex items-center py-12 px-4 my-8">
      <div className="max-w-7xl mx-auto px-4 py-4 w-full">
        <div className="flex justify-between flex-col items-center mb-8">
          <SectionHeading title="Our Customers Feedback" />
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="rounded-full w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 flex justify-center items-center"
            >
              <MdKeyboardArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full w-10 h-10 bg-black-color border border-gray-300 text-white hover:bg-stone-700 flex justify-center items-center transition-all duration-500 ease-linear"
            >
              <MdKeyboardArrowRight className="h-6 w-6" />
            </button>
          </div>




          
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonialsPerSlide)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{
                  flex: `0 0 calc(${100 / testimonialsPerSlide}% - 16px)`,
                }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="flex justify-start">
                    <RatingStars rating={testimonial.rating} />
                  </div>
                  <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pt-5">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.author.image || "/placeholder.svg"}
                      alt={testimonial.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        From {testimonial.author.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}