import {useNavigate, useParams} from "react-router";
import {useLessonViewMutation} from "../../../../app/api/coursesApiSlice";
import React, {useEffect, useState} from "react";
import {Lesson} from "../../types/types";
import {LessonContainer} from "./LessonPage.styles";
import {Button} from "../../../../reusableComponents/Button/Button";

interface ILessonProps {

}

const InitialState: Lesson = {
    id: '',
    title: '',
    text: '',
    slug: '',
    imgUrl: '',
}

export const LessonPage: React.FC<ILessonProps> = () => {
    const [ fetchLesson ] = useLessonViewMutation();
    const [lesson, setLesson] = useState<Lesson>(InitialState);
    const { courseId, lessonId } = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        const getCourseData = async () => {
            if (courseId && lessonId) {
                const lesson = await fetchLesson({courseId, lessonId}).unwrap();
                setLesson(lesson);
            }
        }
        getCourseData();
    }, [])

    return <LessonContainer>
            <h2>{lesson.title}</h2>
            <p>{lesson.text}</p>
            <Button onClick={() => navigation(-1)} label={'Previous Page'} />
    </LessonContainer>
}