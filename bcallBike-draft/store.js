import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice.js';

const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});

export default store;