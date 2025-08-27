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
    // <div className="h-full md:h-screen flex items-center">
    // <section className="w-full flex items-center max-w-7xl mx-4 lg:mx-auto h-full px-4 md:pl-8 bg-gray-100 rounded-3xl">
    <section className="grid md:grid-cols-2 gap-[1rem] h-full w-full max-w-7xl mx-4 lg:mx-auto px-4 md:px-0 md:pl-8 bg-gray-100 rounded-3xl">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 flex flex-col"
      >
        <div className="inline-flex w-fit mt-2 items-center gap-2 bg-white px-2.5 py-2 rounded-full">
          <span className="px-2 py-1 bg-stone-900 text-white text-xs rounded-full">New</span>
          <span className="text-sm text-stone-600">Spring Collection 2024</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
          Where Style Meets <br />
          <span className="text-stone-500">Sophistication</span>
        </h1>

        <p className="text-stone-600 text-lg font-[400]">
          Discover our latest collection of premium fashion pieces, crafted for those who appreciate refined elegance.
        </p>

        <div className="flex flex-col mx-auto md:mx-0 w-full sm:flex-row gap-4">
          <RoundedButton size="lg" className="font-[400] px-8 py-6 text-lg"
            onClick={() => navigate("/shop")}>
            Shop Now
            <FaArrowRightLong className="ml-2 h-4 w-4" />
          </RoundedButton>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-2">
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
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
        className="relative flex items-start lg:items-center justify-start md:justify-end h-full lg:col-end-3"
      >
        <div className="hidden relative w-fit h-fit md:h-full max-h-[100vh] md:flex md:items-start items-center justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-fit h-fit md:w-full md:h-full max-h-[100vh] rounded-2xl object-contain px-auto md:pl-[1rem]"
          />
        </div>

        <div className="relative md:hidden w-full h-full max-h-[100vh] flex items-center justify-end">
          <img
            src={heroImage2}
            alt="Hero"
            className="w-full h-full max-h-[100vh] rounded-2xl object-contain pl-[2rem]"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="text-center px-4 border-r border-stone-200">
              <div className="text-2xl font-bold text-stone-900">50+</div>
              <div className="text-sm text-stone-600">New Arrivals</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-stone-900">4.9</div>
              <div className="text-sm text-stone-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    // </section>
    // </div>
  );
}
