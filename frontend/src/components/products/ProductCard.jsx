// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//       <a href="#">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="h-80 w-72 object-cover rounded-t-xl"
//         />
//         <div className="px-4 py-3 w-72">
//           <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
//           <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
//           <div className="flex items-center">
//             <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
//             <del>
//               <p className="text-sm text-gray-600 cursor-auto ml-2">${product.originalPrice}</p>
//             </del>
//             <div className="ml-auto">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                 fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
//                 <path fillRule="evenodd"
//                   d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                 <path
//                   d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default ProductCard;




// import React from 'react';
// import RatingStars from './RatingStars';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/features/cart/cartSlice';

// const ProductCard = ({
//   id,
//   name,
//   price,
//   oldPrice,
//   image,
//   rating,
//   product
// }) => {

//   const dispatch = useDispatch()

//   return (
//     <div className="relative mx-5 my-2 lg:my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
//       <Link to={`/product-details/${id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
//         <img className="object-cover" src={image} alt="product image" />
//         <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
//       </Link>
//       <div className="mt-4 px-5 pb-5">
//         <a href="#">
//           <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
//         </a>
//         <div className="mt-2 mb-5 flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold text-slate-900">${price}</span>
//             <span className="text-sm text-slate-900 line-through">${oldPrice}</span>
//           </p>
//           <div className="flex items-center">
//             {/* {[...Array(5)].map((_, index) => (
//               <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//             ))} */}
//             <RatingStars rating={rating} />
//             <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
//           </div>
//         </div>
//         <button onClick={() => dispatch(addToCart(product))} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;






import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import RatingStars from './RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const ProductCard = ({ 
  name, 
  description, 
  price, 
  originalPrice, 
  image ,
  rating,
  product
}) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-xl overflow-hidden mb-4 border-opacity-[0.7]">
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
      <div className="space-y-1">
        <h3 className="font-medium text-base text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center gap-1">
        <RatingStars rating={rating}/>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">Rs.{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <button onClick={() => dispatch(addToCart(product))} className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full hover:bg-black-color transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

