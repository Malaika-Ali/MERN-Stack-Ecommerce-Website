import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const adminOrderApi = createApi({
    reducerPath: 'adminOrderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: '/orders',
            }),
            providesTags: ["orders"]
        }),
        getOrdersStats: builder.query({
            query: () => ({
                url: '/orders-stats',
            }),
            providesTags: ["orders-stats"]
        }),
        updateOrderStatus: builder.mutation({
            query:({id, status})=>({
                url: `/order-status/${id}`,
                method: "PATCH",
                body: {status},
            }),
            invalidatesTags: ["orders"]
        })

        // getOrders: builder.query({
        //     query: ({ page }) => {
        //         const queryParams = new URLSearchParams({
        //             page: page.toString(),
        //         }).toString()
        //         return `/orders?${queryParams}`
        //     },
        //     providesTags: ["orders"]
        // }),




    })

}
)

export const { useGetOrdersQuery, useGetOrdersStatsQuery, useUpdateOrderStatusMutation } = adminOrderApi
export default adminOrderApi