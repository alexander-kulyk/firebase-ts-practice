import { configureStore } from '@reduxjs/toolkit';
import { authSliceReduser } from './auth/authSlice';
import { filtersSliceReduser } from './filters/filtersSlice';
import { todoSliceReduser } from './todo/todoSlice';
import { imgUserSliceReduser } from './userImage/sliceUserImg';

export const store = configureStore({
  reducer: {
    auth: authSliceReduser,
    imgUser: imgUserSliceReduser,
    todo: todoSliceReduser,
    filters: filtersSliceReduser,
  },
});
