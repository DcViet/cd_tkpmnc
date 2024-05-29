// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../actions/authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     // other reducers
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;



import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../actions/authSlide';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
