import { apiSlice} from "./apiSlice";
import { CourseWithLesson, getCoursesResponse } from "../../routes/Courses/types/types";
import {Category} from "../../features/categories/types";

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
        courseView: builder.mutation<CourseWithLesson, {id: string}>({
            query: (args) => {
                const { id } = args;
                return {
                    url: '/courses/' + id,
                    method:"GET",
                }
            }
        }),
        getCategories: builder.mutation<Category[], {}>({
            query: () => {
                return {
                    url: '/courses/categories',
                    method:"GET",
                }
            }
        }),
    })
})

export const {
    useCoursesViewMutation,
    useCourseViewMutation,
    useGetCategoriesMutation,
} = coursesApiSlice;