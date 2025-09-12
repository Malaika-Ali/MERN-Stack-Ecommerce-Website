import React from 'react';
import HorizontalCard from '../product cards/HorizontalCard';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeProduct, updateQuantity } from '../../redux/features/cart/cartSlice';
import RoundedButton from '../buttons/RoundedButton';
import TransparentButton from '../buttons/TransparentButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const CartDrawer = ({ toggleCart, isOpen, products }) => {
    const { grandTotal, selectedItems } = useSelector((state) => state.cart);
    const { isAuthenticated } = useAuth()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRemoveProduct = (e, id) => {
        e.preventDefault();
        dispatch(removeProduct({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const disableCheckout = () => {
        if (products.length == 0 && !isAuthenticated) {
            return true
        }
        else if (products.length == 0 && isAuthenticated) {
            return true
        }
        else {
            return false
        }
    }

    const handleCheckoutClick = () => {
        if (products.length != 0 && !isAuthenticated) {
            navigate('/login')
            toggleCart()
        }
        else {
            navigate('/shipping-information')
            toggleCart()
        }
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed top-0 right-0 w-full sm:w-[480px] h-full bg-stone-100 rounded-tl-3xl rounded-bl-3xl shadow-lg z-50"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-6">
                                        <h2 className="text-2xl font-[400]">Your Cart</h2>
                                        <span className="text-grey-color">({selectedItems} Items)</span>
                                    </div>
                                    <button onClick={toggleCart} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                        <RxCross2 size={24} />
                                    </button>
                                </div>

                                {/* Cart items */}
                                <div className="flex-grow overflow-y-auto">
                                    {products.length == 0 ? (
                                        <div className="flex items-center justify-center my-auto">No Items in your cart</div>
                                    ) : (
                                        products.map((item) => (
                                            <HorizontalCard
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price}
                                                quantity={item.quantity}
                                                image={item.image}
                                                size={item.size}
                                                category={item.category}
                                                className="bg-transparent border-b-2 border-gray-200 rounded-none"
                                            />
                                        ))
                                    )}
                                </div>

                                {/* Order summary */}
                                <div className="border-t pt-4">
                                    <div className="flex justify-between pt-2">
                                        <span className="font-[400] text-xl">Subtotal</span>
                                        <span className="font-[400] text-xl">Rs. {grandTotal}</span>
                                    </div>
                                    {/* Free Delivery notice */}
                                    {grandTotal < 5000 && (
                                        <div className="py-3 text-sm text-black-color">
                                            * Add <span className="text-yellow-color">Rs.{5000 - grandTotal}</span> more to get free Delivery.
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 space-y-4">
                                    <RoundedButton children="Checkout Now"
                                        className="w-full font-[300] py-3"
                                        disabled={disableCheckout()}
                                        onClick={handleCheckoutClick}
                                    />
                                    <TransparentButton
                                        children="Clear Cart"
                                        className="w-full text-sm text-[300]"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClearCart();
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleCart}
                            aria-hidden="true"
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default CartDrawer;