import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/users`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: '/register',
        method: "POST",
        body: newUser
      }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: "POST",
        body: credentials
      }),
      // Transform the response to extract the `user` object
      transformResponse: (response) => response.data.user,
    }),

    logoutUser: builder.mutation({
      query: (credentials) => ({
        url: '/logout',
        method: "POST",
        body: credentials
      }),
    }),
  }),
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = userApi
export default userApi