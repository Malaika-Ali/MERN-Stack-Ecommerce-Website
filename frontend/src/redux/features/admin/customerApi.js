import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/admin`,
        credentials: "include",
    }),
    tagTypes: ['Customers'],
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: ({ page = 1,
                //  status = "All"
            } = {}) => ({
                url: `/customers?page=${page}`,
            }),
            providesTags: ["Customers"]
        }),

    })

}
)

export const { useGetCustomersQuery } = customerApi
export default customerApi