import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFixturesApi } from "../api/api";


export const fetchFixtures = createAsyncThunk('fixtures/fetchFixtures', fetchFixturesApi);

const initialState = {
    value: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

export const fixturesSlice = createSlice({
    name: 'fixtures',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchFixtures.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchFixtures.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        });
        builder.addCase(fetchFixtures.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;

        });
    }
});

export default fixturesSlice.reducer;