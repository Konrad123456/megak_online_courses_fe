import {apiSlice} from "./apiSlice";
import {User, withToken} from "../../features/auth/types";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: "POST",
                body: { ...credentials }
            })
        }),
        refresh: builder.mutation<{user: User} & withToken, {}>({
            query: () => ({
                url: '/auth/refresh',
                method: "GET",
            })
        }),
        authenticated: builder.mutation<boolean, {}>({
            query: () => ({
                url: '/auth/authenticated',
                method: "GET",
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: "POST",
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRefreshMutation,
    useAuthenticatedMutation,
    useLogoutMutation,
} = authApiSlice;