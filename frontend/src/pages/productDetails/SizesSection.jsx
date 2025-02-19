import React from 'react'
import { bagSizes, clothesSizes, footwearSizes } from "../../constants"

const SizesSection = ({
  onSizeSelect,
  selectedSize,
  category
}) => {

  let sizes = "";
  if (category === "clothes") {
    sizes = clothesSizes
  }
  else if (category === "footwear"){
    sizes = footwearSizes
  }
  else if (category === "bags"){
    sizes = bagSizes
  }


  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Select Size</h3>
      <div className={`grid grid-cols-5 ${category==="bags"? "lg:grid-cols-2" : "grid-cols-3 lg:grid-cols-5"}  gap-3`}>
        {sizes.map((size) => (
          <button
            key={size}
            // onClick={() => setSelectedSize(size)}
            onClick={()=>onSizeSelect(size)}
            className={`py-1.5 px-1 rounded-full border transition-all duration-500 ease-in-out ${selectedSize === size
              ? 'border-black-color bg-black-color text-white'
              : 'border-gray-300 hover:border-black-color text-black-color'
              }`}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizesSection
