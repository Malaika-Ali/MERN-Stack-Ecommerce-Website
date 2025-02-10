import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import RatingStars from '../../components/products/RatingStars'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails({  name, description, image, price, rating, images = [], productQuantity, category }) {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [quantity, setQuantity] = useState(1)
  const [displayImage, setDisplayImage] = useState(image)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id}=useParams()


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
    dispatch(addToCart(product))
    navigate('/shipping-information')
    console.log('Buy Now:', product)
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 container lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl border-opacity-5 overflow-hidden">
            <img
              src={displayImage || image}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-3 gap-4">
            {images &&
            images.map((img) => (
              // displayImage !== img &&
              <button
                key={img}
                onClick={() => setDisplayImage(img)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                  selectedColor === color ? 'ring-2 ring-black-color' : ''
                }`}
              >
                {
                  <img
                  src={img}
                  alt="product image"
                  className="w-full h-full object-cover"
                />}
              
              </button>
            ))}
          </div> */}

          <div className="grid grid-cols-3 gap-4">
            {images
              .filter((img) => img !== displayImage) // Filter out the current display image
              .map((img) => (
                <button
                  key={img}
                  onClick={() => setDisplayImage(img)}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt="product image"
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
              <RatingStars rating={rating} />
              <span className="text-sm text-gray-600">{rating} Rating</span>
              {productQuantity !== 0 ? (<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>) :
                (<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Out Of Stock
                </span>)
              }
              {/* <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span> */}
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
              onClick={() => handleAddToCart({id, name, price, quantity,image, category, selectedSize, selectedColor })}
            >
              ADD TO CART
            </button>
            <button
              disabled={productQuantity === 0}
              className="w-full py-2 px-2 rounded-full bg-black text-white text-base hover:bg-transparent hover:text-black-color hover:border-2 hover:border-black-color transition-opacity ease-linear"
              onClick={() => handleBuyNow({id,  name, price, quantity, image, category, selectedSize, selectedColor })}
            >
              BUY NOW
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


          {
            category === "clothes" &&
            (
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-900">Select Size</h3>
                <div className="grid grid-cols-5 gap-3">
                  {['extra small', 'small', 'medium', 'large', 'extra large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-2 rounded-full border transition-all duration-500 ease-in-out ${selectedSize === size
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


        </div>
      </div>
    </div>
  )
}

export default ProductDetails