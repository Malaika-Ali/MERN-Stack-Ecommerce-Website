import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const adminProductApi = createApi({
    reducerPath: 'adminProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin/products`,
        credentials: "include",
    }),
    tagTypes: ['Products'], 
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ page = 1, status = "All" } = {}) => ({
                url: `/products-list?page=${page}&status=${status}`,
            }),
            providesTags: ["Products"]
        }),

        addProduct: builder.mutation({
            query: (productDetails)=>({
                url: '/add-product',
                method: 'POST',
                body: productDetails
            }),
            invalidatesTags: ["Products"]
        }),

        updateProduct:builder.mutation({
            query: ({id, data})=>({
                url: `/update-product/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ["Products"]
        })


    })

}
)

export const { useGetProductsQuery,useAddProductMutation, useUpdateProductMutation } = adminProductApi
export default adminProductApi