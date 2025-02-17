import React from "react"
import { useNavigate } from "react-router-dom"

function CategoryCard({ image, title, products }) {

  const navigate=useNavigate()

  const handleClick = () => {
    navigate(`/shop?category=${encodeURIComponent(title.toLowerCase())}`);
  };

    return (
      <div className="group cursor-pointer" onClick={handleClick}>
        <div className="overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg">
          <img
            src={image}
            alt={title}
            className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[200px]"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {/* <p className="text-sm text-gray-500">{products} Products Available</p> */}
        </div>
      </div>
    )
  }

  export default CategoryCard
  
  