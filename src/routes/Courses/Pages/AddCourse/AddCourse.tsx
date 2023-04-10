import {useSelector} from "react-redux";
import {selectCategories} from "../../../../features/categories/categoriesSlice";
import {FormInput} from "../../../../reusableComponents/FormInput/FormInput";
import {useForm} from "react-hook-form";
import {Course} from "../../types/types";
import {Selector} from "../../../../reusableComponents/Selector/Selector";
import {Category} from "../../../../features/categories/types";
import {NewCourseContainer} from "./AddCourse.styles";
import {Button} from "../../../../reusableComponents/Button/Button";
import React from "react";

export const AddCourse = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<Omit<Course, 'id' | 'imgUrl'> & {categoriesIds: number[]}>();
    const categories = useSelector(selectCategories);

    const prepareCategories = () => {
        return (categories as Category[]).map(({id, name}) => {
            return {value: id, optionLabel: name};
        })
    }

    return <NewCourseContainer>
        <h1>Add New Course</h1>
        <form>
            <FormInput label={'Title'} registerObj={{...register('title')}}/>
            <FormInput label={'Slug'} registerObj={{...register('slug')}}/>
            <FormInput label={'Description'} type={'textarea'} registerObj={{...register('description')}}/>
            <Selector label={'Categories'} options={prepareCategories()} registerObj={{...register('categoriesIds')}}/>
            <Button label={'Save'} />
        </form>
    </NewCourseContainer>
}