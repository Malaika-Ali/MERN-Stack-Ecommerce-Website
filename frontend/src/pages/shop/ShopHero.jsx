// import img from '../../../src/assets/bg1.png'

// const ShopHero = () => {
//     return (
//       <div className="relative bg-[#E5E5E3] overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative py-12 md:py-16">
//             <div className="max-w-xl">
//               <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
//                 20% OFF ONLY TODAY AND GET SPECIAL GIFT!
//               </h1>
//               <p className="text-gray-600 text-sm">
//                 Today only, enjoy a stylish 20% off and receive an exclusive gift!
//                 <br />
//                 Elevate your wardrobe now!
//               </p>
//             </div>
//             <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
//               <img
//                 src={img}
//                 alt="Fashion Model"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default ShopHero




// import Image from "next/image"
import bg4 from "../../assets/newImg.png"
export default function ShopHero() {
  return (
    <div className="relative w-full h-[400px] container overflow-hidden bg-[#E5E2DE] rounded-3xl mx-auto my-2 px-8 md:px-16">
      {/* Text Content - Left Side */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[600px]">
        <h1 className="text-[32px] md:text-[40px] font-[500] leading-tight text-black mb-4">
          20% OFF ONLY TODAY AND GET SPECIAL GIFT!
        </h1>
        <p className="text-stone-800 text-sm md:text-base">
          Today only, enjoy a stylish 20% off and receive an exclusive gift! Elevate your wardrobe now!
        </p>
      </div>

      {/* Image - Right Side */}
      <div className="absolute top-0 right-0 h-full w-1/2">
        <img
          src={bg4}
          alt="Fashion model in white turtleneck and sunglasses"
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  )
}


  