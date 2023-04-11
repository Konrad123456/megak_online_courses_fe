import { createSlice } from '@reduxjs/toolkit';
import {Category} from "./types";

export interface categoryValues {
    categories: Category[],
}

export const initialCategoryStateValues: categoryValues = {
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState: initialCategoryStateValues,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
})

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const selectCategories = (state: any) => state.categories.categories;
