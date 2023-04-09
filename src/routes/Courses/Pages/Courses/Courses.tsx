import React, {useEffect, useState} from "react";
import {useCoursesViewMutation} from "../../../../app/api/coursesApiSlice";
import {getCoursesResponse} from "../../types/types";
import {CoursesContainer, CoursesPageContainer, CoursesTitle} from "./Courses.styles";
import {PaginationWrapper} from "../../../../reusableComponents/PaginationWrapper/PaginationWrapper";
import {CourseCard} from "../../components/CourseCard";

interface ICoursesProps {

}

const initialState: getCoursesResponse = {
    items:[],
    meta: {
        currentPage: 0,
        itemCount: 0,
        itemsPerPage: 0,
        totalPages: 0,
        totalItems: 0,
    }
}

export const Courses: React.FC<ICoursesProps> = () => {
    const [ fetchCourses ] = useCoursesViewMutation();
    const [coursesData, setCoursesData] = useState(initialState);
    const [page, setPage] = React.useState(1);

    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        const data = await fetchCourses({page: value, limit: 6}).unwrap();
        setPage(value);
        setCoursesData(data);
    };

    useEffect(() => {
        const getCourses = async () => {
            const data = await fetchCourses({page: 1, limit: 6}).unwrap();
            setCoursesData(data);
        }
        getCourses();
    }, [])

    return <CoursesPageContainer>
        <CoursesTitle>
            Courses
        </CoursesTitle>
        <CoursesContainer>
            {coursesData.items.map(course => {
                return <CourseCard key={course.id} course={course}/>
            })}
        </CoursesContainer>
        <PaginationWrapper counts={coursesData.meta.totalPages} page={page} onChange={handleChange}/>
    </CoursesPageContainer>

}