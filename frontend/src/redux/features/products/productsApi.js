import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/products`,
    // credentials: "include"
  }),

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    fetchAllProducts: builder.query({
      query: ({ category, minPrice, maxPrice, page = 1, limit = 10 }) => {
        const queryParams = new URLSearchParams({
          category: category || "",
          minPrice: minPrice || "",
          maxPrice: maxPrice || "",
          page: page.toString(),
          limit: limit.toString()
        }).toString()
        return `/get-all-products?${queryParams}`
      },
      providesTags: ["Products"]
    }),

    getSingleProduct: (builder)=>({
      query: (id) => `/get-single-product/${id}`,
      providesTags: (result, error, id) => [{type: "Products", id}]
    }),


    addProduct: builder.mutation({
      query: (newProduct)=>(
        {
          url: "/create-product",
          method: "POST",
          body: newProduct,
          credentials: "include"
        }),
        invalidatesTags: ["Products"]
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...rest})=>(
        {
          url: "/update-product/${id}",
          method: "PATCH",
          body: rest,
          credentials: "include"
        }),
        invalidatesTags: ["Products"]
    }),

    deleteProduct: builder.mutation({
      query: (id)=>(
        {
          url: "/delete-product/${id}",
          method: "DELETE",
          credentials: "include"
        }),
        invalidatesTags: (result, error, id) => [{type: "Products", id}]
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllProductsQuery, useAddProductQuery, useGetSingleProductQuery, useUpdateProductQuery, useDeleteProductQuery } = productsApi

export default productsApi