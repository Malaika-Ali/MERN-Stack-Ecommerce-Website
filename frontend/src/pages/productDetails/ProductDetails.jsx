import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateSize } from '../../redux/features/cart/cartSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import RatingStars from '../../components/products/RatingStars'
import { useNavigate, useParams } from 'react-router-dom'
import SizesSection from './SizesSection'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProductDetails({  name, description, image, price, originalPrice, rating, images = [], productQuantity, category, color, material, fabric }) {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [quantity, setQuantity] = useState(1)
  const [displayImage, setDisplayImage] = useState(image)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id}=useParams()
  const {  isAuthenticated } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart); 

  const handleQuantityChange = (action) => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (action === 'increase') {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = (product) => {
    dispatch(updateSize({ id, size: selectedSize }));
    dispatch(addToCart(product))
  }

  const handleBuyNow = (product) => {
    // Check if the product is already in the cart with the selected size
    const productInCart = cart.products.find(
      (item) => item.id === product.id && item.selectedSize === selectedSize
    );
  
    // If the product is not in the cart, add it
    if (!productInCart) {
      dispatch(updateSize({ id: product.id, size: selectedSize }));
      dispatch(addToCart({ ...product, selectedSize }));
    }
  
    // Navigate based on authentication status
    if (isAuthenticated) {
      navigate('/shipping-information');
    } else {
      navigate('/login');
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  }

  let detailName=""
  let detailValue=""
  if(category==="clothes"){
    detailName="Fabric",
    detailValue=fabric
  }
  else{
    detailName="Material",
    detailValue=material
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 container pt-6 md:pt-12 lg:pt-18">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl border-opacity-5 overflow-hidden">
            <LazyLoadImage
              src={displayImage || image}
              alt="Product"
              effect="blur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images
              .filter((img) => img !== displayImage) 
              .map((img) => (
                <button
                  key={img}
                  onClick={() => setDisplayImage(img)}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                >
                  <LazyLoadImage
                    src={img}
                    alt="product image"
                    effect="blur"
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
                <span className="text-xl text-gray-400 line-through">Rs.{originalPrice}</span>
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
                <span className="text-gray-600">Category</span>
                {/* <span className="text-gray-900">{category[0]?.toUpperCase() + category.substring(1)}</span> */}
                <span className="text-gray-900">{category}</span>

              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color</span>
                <span className="text-gray-900">{color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{detailName}</span>
                <span className="text-gray-900">{detailValue}</span>
              </div>
            </div>
          </div>
          {
            (category === "clothes" ||category === "bags"|| category === "footwear" ) &&
            <SizesSection category={category} onSizeSelect={handleSizeSelect} selectedSize={selectedSize}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetails