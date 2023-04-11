import {useSelector} from "react-redux";
import {selectCategories} from "../../../../features/categories/categoriesSlice";
import {FormInput} from "../../../../reusableComponents/FormInput/FormInput";
import {useForm} from "react-hook-form";
import {Course} from "../../types/types";
import {Selector} from "../../../../reusableComponents/Selector/Selector";
import {Category} from "../../../../features/categories/types";
import {FormContainer, NewCourseContainer} from "./AddCourse.styles";
import {Button} from "../../../../reusableComponents/Button/Button";
import React from "react";
import {useNewCourseMutation} from "../../../../app/api/coursesApiSlice";
import {zodResolver} from "@hookform/resolvers/zod";
import {addCourseSchema} from "../../ValidationSchemas/ValidationSchemas";

export const AddCourse = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Omit<Course, 'id' | 'imgUrl'> & {categoriesIds: number[]}>({
        resolver: zodResolver(addCourseSchema),
    });
    const categories = useSelector(selectCategories);
    const [newCourse, {isLoading}] = useNewCourseMutation();

    const prepareCategories = () => {
        return (categories as Category[]).map(({id, name}) => {
            return {value: id, optionLabel: name};
        })
    }

    const onSubmitHandler = async (data: Omit<Course, 'id' | 'imgUrl'> & {categoriesIds: number[]}) => {
        try {
            const courseData = await newCourse(data).unwrap();
            reset();
        } catch (e) {
            console.log('Fail');
        }
    };

    return <NewCourseContainer>
        <h1>Add New Course</h1>
        <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
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
            <FormInput
                label={'Description'}
                type={'textarea'} registerObj={{...register('description')}}
                errorText={errors.description?.message}
            />
            {/*<FormInput label={'Image'} type={'file'} registerObj={{...register('courseImg')}}/>*/}
            <Selector
                label={'Categories'}
                options={prepareCategories()}
                registerObj={{...register('categoriesIds')}}
                errorText={errors.categoriesIds?.message}
                multiple
            />
            <Button label={'Save'} />
        </FormContainer>
    </NewCourseContainer>
}