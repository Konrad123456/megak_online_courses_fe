import { createSlice } from '@reduxjs/toolkit';
import { User } from "./types";

interface InitialAuthState {
    user: User | null;
    token: string | null;
}

export const initialAuthStateValues: InitialAuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthStateValues,
    reducers: {
        setCredentials: (state, action) => {
            const { user, access_token } = action.payload;
            state.user = user;
            state.token = access_token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;