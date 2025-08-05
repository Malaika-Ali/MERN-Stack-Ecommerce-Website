import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/cart/cartSlice.js'
import authReducer from '../redux/features/auth/authSlice.js'
import themeReducer from '../redux/features/theme/themeSlice.js'
import userApi from './features/auth/userApi.js'
import productsApi from './features/products/productsApi.js'
import reviewsApi from './features/reviews/reviewsApi.js'
import orderApi from './features/order/orderApi.js'
import dashboardApi from './features/admin/dashboardApi.js'
import adminProductApi from './features/admin/productApi.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    theme: themeReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [adminProductApi.reducerPath]: adminProductApi.reducer,




  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware, reviewsApi.middleware, orderApi.middleware, dashboardApi.middleware, adminProductApi.middleware),
})