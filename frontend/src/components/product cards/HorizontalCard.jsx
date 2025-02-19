import React from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HorizontalCard = ({
  id,
  name,
  category,
  quantity,
  size,
  price,
  image,
  className=""
}) => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const updateItemQuantity=(type,id)=>{
    const payload={type, id}
    dispatch(updateQuantity(payload))
}


  return (
    <div className={`flex gap-4 bg-gray-100 p-4 rounded-xl ${className}`}>
    <div className="w-[100px] h-[100px] bg-gray-50 rounded-xl flex items-center justify-center p-2
    cursor-pointer"
    onClick={()=>navigate(`/product-details/${id}`)}>
      <LazyLoadImage
        src={image}
        alt={name}
        effect="blur"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-normal">{name}</h3>
      <div className="mt-1 space-y-0.5">
      <div className="text-xs text-gray-500">Category: {category}</div>
      {
        category!="accessories" && (
      <div className="text-xs text-gray-500">Size: {size}</div>
        )
      }
        <div className="text-xs text-gray-500">Qty: {quantity}</div> 
      </div>
    
    </div>
    <div className="text-right flex flex-col justify-between pt-1">
      <span className="font-medium">Rs. {price}</span>
      <div className="flex items-center gap-3 pb-4 lg:pb-5">
        <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm"
        onClick={() => updateItemQuantity('decrement', id)}>
          -
        </button>
        <span className="text-sm">{quantity}</span>
        <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm bg-black text-white"
        onClick={() => updateItemQuantity('increment', id)}>
          +
        </button>
      </div>
    </div>
  </div>
  )
}

export default HorizontalCard
