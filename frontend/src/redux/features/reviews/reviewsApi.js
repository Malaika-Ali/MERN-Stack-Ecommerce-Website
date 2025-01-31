import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/reviews`,
    // credentials: "include"
  }),

  tagTypes: ["Reviews"],

  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (productId) => `/get-all-reviews/${productId}`,
      providesTags: (result, error, productId) => [{ type: 'Reviews', productId }],
    }),
   

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReviewsQuery } = reviewsApi

export default reviewsApi