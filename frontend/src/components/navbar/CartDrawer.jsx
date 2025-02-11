import React, { useState } from 'react'
import HorizontalCard from '../product cards/HorizontalCard';

import { RxCross2 } from "react-icons/rx";
import { LuMinus, LuPlus } from "react-icons/lu";

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeProduct, updateQuantity } from '../../redux/features/cart/cartSlice';


const CartDrawer = ({ toggleCart, isOpen, products }) => {
    const {totalPrice, grandTotal, tax, selectedItems}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    const updateItemSize = (id, size) => {
        setCartItems((items) =>
            items.map((item) => (item.id === id ? { ...item, size } : item))
        )
    }

    const updateItemQuantity=(type,id)=>{
        const payload={type, id}
        dispatch(updateQuantity(payload))
    }

    const handleRemoveProduct=(e,id)=>{
        e.preventDefault()
        dispatch(removeProduct({id}))
    }

    const handleClearCart=()=>[
        dispatch(clearCart())
    ]

   
    const discount = 200
    console.log("products", products)

    return (
        <div>
            {/* Cart toggle button */}
            {/* <button
        onClick={toggleCart}
        className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Toggle cart"
      >
        <FaShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      </button> */}

            {/* Cart modal */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-[480px] h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center  gap-6">
                            <h2 className="text-2xl font-[400]">Your Cart</h2>
                            <span className="text-grey-color">({selectedItems } Items)</span>
                        </div>
                        <button onClick={toggleCart} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <RxCross2 size={24} />
                        </button>
                    </div>

                    {/* Cart items */}
                    <div className="flex-grow overflow-y-auto">
                       {
                        products.length==0 ? <div>No Items in your cart </div>:
                        (products.map((item) => (
                            // <div key={item.id} className="flex gap-4 py-4 border-t">
                            //     <img
                            //         src={item.imageUrl}
                            //         alt={item.name}
                            //         width={80}
                            //         height={100}
                            //         className="object-cover rounded"
                            //     />

                            //     <div className="flex-grow">
                            //         <h3 className="font-medium">{item.name}</h3>
                            //         <div className="mt-2 flex items-center gap-4">
                            //             {/* <div className="flex items-center gap-2">
                            //                 <select
                            //                     value={item.size}
                            //                     onChange={(e) => updateItemSize(item.id, e.target.value)}
                            //                     className="border rounded px-2 py-1 bg-transparent"
                            //                 >
                            //                     <option value="M">M</option>
                            //                     <option value="L">L</option>
                            //                     <option value="XL">XL</option>
                            //                 </select>
                            //             </div> */}
                            //             <div className="flex items-center gap-2">
                            //                 <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => updateItemQuantity('decrement', item.id)}>
                            //                     <LuMinus size={16} />
                            //                 </button>
                            //                 <span className="w-8 text-center">{item.quantity}</span>
                            //                 <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => updateItemQuantity('increment', item.id)}>
                            //                     <LuPlus size={16} />
                            //                 </button>
                            //             </div>
                            //         </div>
                            //         <div className="mt-2 flex items-center gap-2">
                            //             <span className="font-semibold">Rs. {item.price}</span>
                            //             <button onClick={(e)=>handleRemoveProduct(e,item.id)} className="text-gray-500">Remove</button>
                            //         </div>
                            //     </div>
                            // </div>
                            <HorizontalCard key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} image={item.image} category={item.category} className='bg-transparent border-b-2 border-gray-200 rounded-none'/>
                        )))
                       }
                    </div>

                    {/* Free shipping notice */}
                    <div className="py-3 text-sm text-black-color">
                        * Add Rs.{5000-grandTotal}  more to get free Delivery.
                    </div>

                    {/* Order summary */}
                    <div className="border-t pt-4">
                        <h3 className="font-semibold mb-4">Order Summary</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Item Total</span>
                                <span>Rs. {totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-red-500">Rs. {tax}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Discounts</span>
                                <span className="text-blue-500 flex items-center justify-between"><LuMinus style={{color: 'grey'}}/> Rs. {discount}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t font-semibold">
                                <span>Final Total</span>
                                <span>Rs. {grandTotal}</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout buttons */}
                    <div className="mt-6 space-y-4">
                        <button className="w-full py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Proceed to Checkout
                        </button>
                        <button className="w-full py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={(e)=>{
                            e.preventDefault()
                            handleClearCart()
                        }}>
                            Clear Cart
                        </button>
                        <button onClick={toggleCart} className="w-full text-blue-500 hover:underline">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleCart}
                    aria-hidden="true"
                ></div>
            )}
        </div>
    )
}

export default CartDrawer

