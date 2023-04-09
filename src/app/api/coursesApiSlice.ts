import { apiSlice} from "./apiSlice";
import { CourseWithLesson, getCoursesResponse } from "../../routes/Courses/types/types";

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
    })
})

export const {
    useCoursesViewMutation,
    useCourseViewMutation,
} = coursesApiSlice;