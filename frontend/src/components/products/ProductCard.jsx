import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

import {  FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import IconButton from '../buttons/IconButton';

const ProductCard = ({ 
  
  name, 
  description, 
  price, 
  originalPrice, 
  image ,
  rating,
  product,
  category,
  color
}) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const id=product._id

  const handleAddToCart = (product) => {
    setQuantity((prev)=>prev+=1)
    dispatch(addToCart(product))
  }


  return (
    <div className="flex flex-col"
   >
      {/* Image Container */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-xl overflow-hidden mb-4 border-opacity-0 cursor-pointer"
       onClick={()=>navigate(`/product-details/${id}`)}>
        <img
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-2 top-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <FaHeart 
            className={`h-3.5 w-3.5 ${isFavorite ? 'text-red-500' : 'text-grey-color'}`}
          />
        </button>
      </div>

      {/* Content Container */}
      <div className="space-y-1 lg:px-2">
        <div className="flex flex-row justify-between">
        <h3 className="font-[400] text-base text-black-color">{name}</h3>
        <h6 className="font-[500]">Rs.{price}</h6>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center justify-between">
        <RatingStars rating={rating}/>

        <IconButton onClick={() => handleAddToCart({id, name, price, quantity,image, category, selectedSize:"medium", color })} className="text-sm p-2" >    
        <FiShoppingCart className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

