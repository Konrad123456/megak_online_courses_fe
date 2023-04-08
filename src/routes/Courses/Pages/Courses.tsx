import React, {useEffect, useState} from "react";
import {useCoursesViewMutation} from "../../../app/api/coursesApiSlice";
import {getCoursesResponse} from "../types/types";
import {CourseCard, CoursesContainer, CoursesPageContainer, CoursesTitle, ImgContainer} from "./Courses.styles";
import {NavLink} from "react-router-dom";
import {PaginationWrapper} from "../../../reusableComponents/PaginationWrapper/PaginationWrapper";
import {urlConfig} from "../../../config/url.config";

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
                return <CourseCard key={course.id}>
                    {
                        course.imgUrl ?
                            <ImgContainer><img src={`${urlConfig.baseUrl}/uploads/courses/${course.id}/img`} alt=""/></ImgContainer> :
                            null
                    }
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <NavLink to={'/courses/' + course.id}>Go to Course</NavLink>
                </CourseCard>
            })}
        </CoursesContainer>
        <PaginationWrapper counts={coursesData.meta.totalPages} page={page} onChange={handleChange}/>
    </CoursesPageContainer>

}