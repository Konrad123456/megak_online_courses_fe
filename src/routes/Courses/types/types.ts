export interface getCoursesResponse {
    items: {
        id: string,
        description: string,
        slug: string,
        title: string,
        imgUrl: string
    }[],
    meta: {
        currentPage: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        totalItems: number,
    }
}