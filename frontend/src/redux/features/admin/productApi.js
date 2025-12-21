import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const adminProductApi = createApi({
    reducerPath: 'adminProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin/products`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/products-list',
            }),
            providesTags: ["products"]
        }),

        addProduct: builder.mutation({
            query: (productDetails)=>({
                url: '/add-product',
                method: 'POST',
                body: productDetails
            }),
            invalidatesTags: ["products"]
        })


    })

}
)

export const { useGetProductsQuery,useAddProductMutation } = adminProductApi
export default adminProductApi