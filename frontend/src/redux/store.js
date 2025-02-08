import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/cart/cartSlice.js'
import authReducer from '../redux/features/auth/authSlice.js'
import userApi from './features/auth/userApi.js'
import productsApi from './features/products/productsApi.js'
import reviewsApi from './features/reviews/reviewsApi.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware, reviewsApi.middleware),
})