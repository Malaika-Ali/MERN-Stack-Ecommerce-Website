import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const adminOrderApi = createApi({
    reducerPath: 'adminOrderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin`,
        credentials: "include",
    }),
    tagTypes: ['Orders'],  
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: ({page= 1, status="All"}={}) => ({
                url: `/orders?page=${page}&status=${status}`,
            }),
            providesTags: ["Orders"]
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
            invalidatesTags: ["Orders"]
        })
    })

}
)

export const { useGetOrdersQuery, useGetOrdersStatsQuery, useUpdateOrderStatusMutation } = adminOrderApi
export default adminOrderApi