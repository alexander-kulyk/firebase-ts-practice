import { createSlice } from '@reduxjs/toolkit';

const initialState = 'all';

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersSliceReduser = filtersSlice.reducer;
