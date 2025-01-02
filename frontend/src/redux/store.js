import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/cart/cartSlice.js'

export const store= configureStore({
  reducer: {
    cart: cartReducer
  },
})