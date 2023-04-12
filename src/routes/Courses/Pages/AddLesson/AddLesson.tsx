import {FormInput} from "../../../../reusableComponents/FormInput/FormInput";
import {useForm} from "react-hook-form";
import {Course, Lesson} from "../../types/types";
import {FormContainer, NewCourseContainer} from "../Styles/Styles";
import {Button} from "../../../../reusableComponents/Button/Button";
import React from "react";
import {useNewLessonMutation} from "../../../../app/api/coursesApiSlice";
import {zodResolver} from "@hookform/resolvers/zod";
import {addLessonSchema} from "../../ValidationSchemas/ValidationSchemas";
import {useParams} from "react-router";
import {TextArea} from "../../../../reusableComponents/FormInput/TextArea";

export const AddLesson = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Omit<Lesson, 'id' | 'imgUrl'>>({
        resolver: zodResolver(addLessonSchema),
    });
    const {courseId} = useParams();
    const [newLesson, {isLoading}] = useNewLessonMutation();

    const onSubmitHandler = async (data: Omit<Lesson, 'id' | 'imgUrl'>) => {
        try {
            if(courseId) {
                const lessonData = await newLesson({...data, courseId}).unwrap();
            }
            reset();
        } catch (e) {
            console.log('Fail');
        }
    };

    return <NewCourseContainer>
        <h1>Add New Lesson</h1>
        <FormContainer>
            <FormInput
                label={'Title'}
                registerObj={{...register('title')}}
                errorText={errors.title?.message}
            />
            <FormInput
                label={'Slug'}
                registerObj={{...register('slug')}}
                errorText={errors.slug?.message}
            />
            <TextArea
                label={'Text'}
                registerObj={{...register('text')}}
                errorText={errors.text?.message}
            />
            <Button label={'Save'} type={'button'} onClick={handleSubmit(onSubmitHandler)}/>
        </FormContainer>
    </NewCourseContainer>
}