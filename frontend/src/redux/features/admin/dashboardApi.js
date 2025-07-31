import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin/dashboard`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getStats: builder.query({
            query: ({ startDate, endDate }) => ({
                url: '/stats',
                params: { startDate, endDate },
            }),
        }),

        getTopProducts: builder.query({
            query: ({ startDate, endDate }) => ({
                url: '/topProducts',
                params: { startDate, endDate },
            }),
        }),

        getRecentOrders: builder.query({
            query: ({ startDate, endDate }) => ({
                url: '/recent-orders',
                params: { startDate, endDate },
            }),
        }),

        getRevenueAnalytics: builder.query({
            query: ({ startDate, endDate }) => ({
                url: '/revenue-analytics',
                params: { startDate, endDate },
            }),
        }),
    })

}
)

export const { useGetStatsQuery, useGetTopProductsQuery, useGetRecentOrdersQuery, useGetRevenueAnalyticsQuery } = dashboardApi
export default dashboardApi