'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import RatingStars from '../../components/products/RatingStars'

function ProductDetails({name, description, image, price, rating}) {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const images = {
    blue: "/placeholder.svg?height=600&width=600",
    white: "/placeholder.svg?height=600&width=600",
    black: "/placeholder.svg?height=600&width=600"
  }

  const handleQuantityChange = (action) => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (action === 'increase') {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleBuyNow = (product) => {
    // Implement buy now functionality
    console.log('Buy Now:', product)
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 container lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(images).map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                  selectedColor === color ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={images[color] || "/placeholder.svg"}
                  alt={`${color} variant`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <RatingStars rating={rating}/>
              <span className="text-sm text-gray-600">{rating} Rating</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>
            </div>
          </div>

          <p className="text-gray-600">
           {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition-opacity hover:bg-gray-800"
                >
                  <FaMinus className="h-3 w-3" />
                </button>
                <span className="w-8 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition-opacity hover:bg-gray-800"
                >
                  <FaPlus className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">Rs.{price}</span>
                <span className="text-xl text-gray-400 line-through">Rs.600</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-3 mt-6">
            <button 
              className="w-full py-2 px-4 rounded-full border-2 border-black text-black text-base hover:bg-black hover:text-white transition-colors duration-200 ease-linear" 
              onClick={() => handleAddToCart({name, price, quantity, selectedSize, selectedColor})}
            >
              ADD TO CART
            </button>
            <button 
              className="w-full py-2 px-2 rounded-full bg-black text-white text-base hover:bg-transparent hover:text-black-color hover:border-2 hover:border-black-color transition-opacity ease-linear"
              onClick={() => handleBuyNow({name, price, quantity, selectedSize, selectedColor})}
            >
              BUY IT NOW
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Size</span>
                <span className="text-gray-900">Small, Medium, Large</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color</span>
                <span className="text-gray-900">White, Black, Gray</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Brand</span>
                <span className="text-gray-900">Shirt Flex</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 rounded-md border ${
                    selectedSize === size
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Select Color</h3>
            <div className="flex gap-3">
              {[
                { name: 'blue', class: 'bg-blue-600' },
                { name: 'red', class: 'bg-red-600' },
                { name: 'indigo', class: 'bg-indigo-600' },
                { name: 'emerald', class: 'bg-emerald-500' },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? 'ring-2 ring-offset-2 ring-blue-500'
                      : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails