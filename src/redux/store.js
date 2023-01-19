import { configureStore } from '@reduxjs/toolkit';
import { authSliceReduser } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReduser,
  },
});
