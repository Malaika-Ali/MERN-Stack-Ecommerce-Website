import { useState } from 'react'
import RatingStars from '../../components/products/RatingStars'
// import { Star } from 'lucide-react'

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [quantity, setQuantity] = useState(1)

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedColor]}
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
                  src={images[color]}
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
            <h1 className="text-3xl font-bold text-gray-900">Men's Regular T-shirt</h1>
            <div className="mt-2 flex items-center gap-2">
              {/* <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div> */}
              <RatingStars rating={3}/>
              <span className="text-sm text-gray-600">5 Rating</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>
            </div>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod
            quis.
          </p>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-3 py-1 border-r hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-3 py-1 border-l hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">$29.00</p>
              <p className="text-sm text-gray-500">+12% VAT Added</p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>

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
                      : 'border-gray-300 hover:border-gray-400'
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

