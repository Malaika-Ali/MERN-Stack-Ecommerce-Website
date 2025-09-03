import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import RatingStars from './RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

// import {  FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import IconButton from '../buttons/IconButton';
import highlightMatch from '../../utils/highlightMatch';
import { RiSafariFill } from 'react-icons/ri';

const ProductCard = ({

  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  product,
  category,
  color,
  searchQuery
}) => {

  // const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = product._id

  const handleAddToCart = (product) => {
    setQuantity((prev) => prev += 1)
    dispatch(addToCart(product))
  }


  return (
    <div className="flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-xl overflow-hidden mb-4 cursor-pointer"
        onClick={() => navigate(`/product-details/${id}`)}>
        <LazyLoadImage
          src={image}
          alt={name}
          effect="blur"
          className="object-cover max-w-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="space-y-1 lg:px-2">
        <div className="flex flex-row justify-between">
          <h3 className="font-[400] text-base text-black-color">{
            searchQuery ?
              highlightMatch(name, searchQuery) :
              name}
          </h3>
          <h6 className="font-[600]">{
            searchQuery ?
              highlightMatch(`Rs. ${price}`, searchQuery) :
              `Rs. ${price}`}</h6>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center justify-between">
          <div className='flex flex-row gap-1 justify-between items-center'>
            <RatingStars rating={rating} />
            <span className='text-gray-500 text-xs'>({rating})</span>
          </div>

          <IconButton onClick={() => handleAddToCart({ id, name, price, quantity, image, category, selectedSize: "medium", color })} className="text-sm p-2" >
            <FiShoppingCart className="w-3 h-3" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

