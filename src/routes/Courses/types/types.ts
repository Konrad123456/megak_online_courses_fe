export interface getCoursesResponse {
    items: Course[],
    meta: {
        currentPage: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        totalItems: number,
    }
}

export interface Course {
    id: string,
    description: string,
    slug: string,
    title: string,
    imgUrl: string
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    text: string;
    imgUrl: string;
}

export type CourseWithLesson = Course & { lessons: Lesson[] };