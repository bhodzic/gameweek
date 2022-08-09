import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserApi, loginUserApi, logoutUserApi } from "../api/api";



export const createUser = createAsyncThunk('user/createUser', createUserApi);
export const loginUser = createAsyncThunk('user/loginUser', loginUserApi);
export const logoutUser = createAsyncThunk('user/logoutUser', logoutUserApi);

const initialState = {
    value: {},
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(createUser.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;

        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;

        });
        builder.addCase(logoutUser.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log(action.payload)
            state.value = action.payload;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;

        });
    }
});

// Action creators are generated for each case reducer function
export const { setPath } = userSlice.actions;

export default userSlice.reducer;