import {useParams} from "react-router";
import {useCourseViewMutation} from "../../../../app/api/coursesApiSlice";
import React, {useEffect, useState} from "react";
import {CourseWithLesson} from "../../types/types";
import {urlConfig} from "../../../../config/url.config";
import {CourseContainer, CourseContent} from "./Course.styles";
import {AsideMenu} from "../../../../reusableComponents/AsideMenu/AsideMenu";

interface ICourseProps {

}

const InitialState: CourseWithLesson = {
    id: '',
    description: '',
    slug: '',
    title: '',
    imgUrl: '',
    lessons: [],
}

export const Course: React.FC<ICourseProps> = () => {
    const [ fetchCourse ] = useCourseViewMutation();
    const [course, setCourse] = useState<CourseWithLesson>(InitialState);
    const { courseId } = useParams();

    const prepareElementsMenu = (course: CourseWithLesson): {text: string, url: string}[] => {
        return course.lessons.map(lesson => {
            return {text: lesson.title, url: `/courses/${courseId}/lesson/${lesson.id}`}
        })
    }

    useEffect(() => {
        const getCourseData = async () => {
            if (courseId) {
                const course = await fetchCourse({id: courseId}).unwrap();
                setCourse(course);
            }
        }
        getCourseData();
    }, [])

    return <CourseContainer>
        <AsideMenu elements={prepareElementsMenu(course)}/>
        <CourseContent>
            {courseId ? <img src={`${urlConfig.baseUrl}/uploads/courses/${courseId}/img`} alt=""/> : null}
            <h2>{course.title}</h2>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </CourseContent>
    </CourseContainer>
}