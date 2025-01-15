import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/cart/cartSlice.js'
import userApi from './features/auth/userApi.js'
import productsApi from './features/products/productsApi.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware),
})