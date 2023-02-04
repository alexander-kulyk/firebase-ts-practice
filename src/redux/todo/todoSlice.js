import { createSlice } from '@reduxjs/toolkit';
import { getTodos, updateTodos } from 'redux/todo/opirations';

const initialState = {
  todo: [],
  error: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  extraReducers: {
    [getTodos.fulfilled](state, action) {
      state.todo = action.payload;
    },
    [getTodos.rejected](state, action) {
      state.error = action.payload;
    },

    [updateTodos.fulfilled](state, action) {
      state.todo = action.payload;
    },
    [updateTodos.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const todoSliceReduser = todoSlice.reducer;
