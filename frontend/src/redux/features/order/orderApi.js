import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/orders`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: '/create-order',
        method: "POST",
        body: newOrder
      }),
    }),

  }),
})

export const { useCreateOrderMutation } = orderApi
export default orderApi