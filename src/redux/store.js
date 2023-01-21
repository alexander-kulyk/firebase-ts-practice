import { configureStore } from '@reduxjs/toolkit';
import { authSliceReduser } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReduser,
  },
});
