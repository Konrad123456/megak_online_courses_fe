import { apiSlice} from "./apiSlice";
import {getCoursesResponse} from "../../routes/Courses/types/types";

interface coursesViewArgs {
    page: number,
    limit: number,
}

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        coursesView: builder.mutation<getCoursesResponse, coursesViewArgs>({
            query: (args) => {
                const { page, limit } = args;
                return {
                    url: '/courses',
                    method:"GET",
                    params: {
                        page,
                        limit
                    }
                }
            }
        }),
    })
})

export const {
    useCoursesViewMutation,
} = coursesApiSlice;