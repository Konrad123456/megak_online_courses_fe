import { apiSlice} from "./apiSlice";
import {Course, CourseWithLesson, getCoursesResponse, Lesson} from "../../routes/Courses/types/types";
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
        instructorsCoursesView: builder.mutation<getCoursesResponse, coursesViewArgs>({
            query: (args) => {
                const { page, limit } = args;
                return {
                    url: '/courses/instructors',
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
        lessonView: builder.mutation<Lesson, {courseId: string, lessonId: string}>({
            query: (args) => {
                const { courseId, lessonId } = args;
                console.log(courseId, lessonId)
                return {
                    url: '/courses/' + courseId + '/lesson/' + lessonId,
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
        newCourse: builder.mutation<Course, Omit<Course, 'id' | 'imgUrl'> & {categoriesIds: number[]}>({
            query: (course) => {
                return {
                    url: '/courses',
                    method:"POST",
                    body: {...course}
                }
            }
        }),
        newLesson: builder.mutation<Lesson, Omit<Lesson, 'id' | 'imgUrl'> & {courseId: string}>({
            query: (args) => {
                const {courseId, ...lesson} = args;
                return {
                    url: '/courses/' + courseId + '/lesson',
                    method:"POST",
                    body: {...lesson}
                }
            }
        }),
        deleteLesson: builder.mutation<boolean, {url: string}>({
            query: (args) => {
                const {url} = args;
                return {
                    url: url,
                    method:"DELETE",
                }
            }
        }),
        deleteCourse: builder.mutation<boolean, {id: string}>({
            query: (course) => {
                const {id} = course;
                return {
                    url: '/courses/' + id,
                    method:"DELETE",
                }
            }
        }),
        // addCourseImg: builder.mutation<Course, {id: string; courseImg: HTMLImageElement}>({
        //     async queryFn (args) {
        //         const {id, courseImg} = args;
        //         const formData = new FormData();
        //         formData.append('courseImg', courseImg);
        //         console.log(formData)
        //         return {
        //             url: 'uploads/courses/' + id,
        //             method:"POST",
        //             // headers: {
        //             //     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        //             //     'Content-Length': '<calculated when request is sent>',
        //             // },
        //             body: formData
        //         }
        //     }
        // }),
    })
})

export const {
    useCoursesViewMutation,
    useCourseViewMutation,
    useGetCategoriesMutation,
    useNewCourseMutation,
    useInstructorsCoursesViewMutation,
    useDeleteCourseMutation,
    useLessonViewMutation,
    useNewLessonMutation,
    useDeleteLessonMutation,
} = coursesApiSlice;