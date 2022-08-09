import { configureStore } from '@reduxjs/toolkit';
import pathReducer from '../slices/pathSlice';
import fixturesReducer from '../slices/fixturesSlice';
import predictionsReducer from '../slices/predictionsSlice';
import detailsReducer from '../slices/detailsSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
    reducer: {
        path: pathReducer,
        fixtures: fixturesReducer,
        predictions: predictionsReducer,
        details: detailsReducer,
        user: userReducer
    }
});