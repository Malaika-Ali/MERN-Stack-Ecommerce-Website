import img from '../../assets/img.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaArrowRightLong } from "react-icons/fa6";

export default function PromotionalBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
          <LazyLoadImage
            src={img}
            alt="Promotional lifestyle image"
            effect="blur"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 bg-black p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <span className="text-gray-300 text-sm font-medium tracking-wider">LIMITED OFFER</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              35% off only this friday and get special gift
            </h2>

            <button className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95">
              Grab it now
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

