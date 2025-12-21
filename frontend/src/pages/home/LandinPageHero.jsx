import { motion } from "framer-motion";
import RoundedButton from "../../components/buttons/RoundedButton";

import heroImage from "../../assets/bg-opt.png";
import heroImage2 from "../../assets/hero-img2.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function LandingPageHero() {

  const navigate = useNavigate()

  return (
    <section className="grid md:grid-cols-2 gap-[1rem] h-full w-full md:max-w-7xl md:mx-auto lg:mx-auto px-4 md:pl-8 md:pr-0 bg-gray-100 rounded-3xl">

      <div className="inline-flex md:hidden w-fit mt-8 items-center gap-2 bg-white px-2.5 py-2 rounded-full">
        <span className="px-2 py-1 bg-stone-900 text-white text-xs rounded-full">New</span>
        <span className="text-sm text-stone-600">Spring Collection 2024</span>
      </div>

      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 flex flex-col order-2 md:order-1"
      >
        <div className="hidden md:inline-flex w-fit mt-8 items-center gap-2 bg-white px-2.5 py-2 rounded-full">
          <span className="px-2 py-1 bg-stone-900 text-white text-xs rounded-full">New</span>
          <span className="text-sm text-stone-600">Spring Collection 2024</span>
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 leading-tight tracking-tight text-center md:text-start">
          Where Style Meets <br />
          <span className="text-stone-500 font-bold">Sophistication</span>
        </h1>

        <p className="text-stone-600 text-md font-[400] text-center md:text-start">
          Discover our latest collection of premium fashion pieces, crafted for those who appreciate refined elegance.
        </p>

        <div className="flex flex-col mx-auto w-full sm:flex-row gap-4">
          <RoundedButton size="lg" className="font-[650] px-4 py-3 text-lg"
            onClick={() => navigate("/shop")}>
            Shop Now
            <FaArrowRightLong className="ml-2 h-4 w-4" />
          </RoundedButton>
        </div>

        <div className="grid grid-cols-2 gap-6 py-2">
          <div className="flex items-start gap-3 bg-white p-3 md:p-4 rounded-xl">
            <MdOutlineLocalShipping className="h-6 w-6 text-stone-600" />
            <div>
              <h3 className="font-medium text-stone-900">Free Delivery</h3>
              <p className="text-sm text-stone-500">On orders above Rs.5000</p>

            </div>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
            <TbTruckReturn className="h-6 w-6 text-stone-600" />
            <div>
              <h3 className="font-medium text-stone-900">Easy Returns</h3>
              <p className="text-sm text-stone-500">30-day return policy</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex  lg:items-center  md:justify-end h-full lg:col-end-3 order-1 md:order-2"
      >
        <div className="hidden relative w-fit h-fit md:h-full max-h-[100vh] md:flex md:items-start items-center justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full object-cover px-auto"
          />
        </div>

        <div className="md:hidden flex justify-center items-center w-[70%] mx-auto h-full">
          <img
            src={heroImage2}
            alt="Hero"
            className="w-full object-cover block"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-2 md:p-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="text-center px-4 border-r border-stone-200">
              <div className="text-lg md:text-2xl font-bold text-stone-900">50+</div>
              <div className="text-xs md:text-sm text-stone-600">New Arrivals</div>
            </div>
            <div className="text-center px-4">
              <div className="text-lg md:text-2xl font-bold text-stone-900">4.9</div>
              <div className="text-xs md:text-sm text-stone-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
