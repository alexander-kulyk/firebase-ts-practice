import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, update, child, get } from 'firebase/database';

const updateUser = (database, userId, todoDetails) => {
  update(ref(database, 'users/' + userId), {
    todo: todoDetails,
  });
};

export const getTodos = createAsyncThunk(
  'todo/getTodo',
  async (_, thunkAPI) => {
    const dbRef = ref(getDatabase());
    const state = thunkAPI.getState();
    const uid = state.auth.uid;
    try {
      const resp = await get(child(dbRef, `users/${uid}`)).then(snapshot =>
        snapshot.val()
      );
      const todos = JSON.parse(resp.todo);
      return todos;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTodos = createAsyncThunk(
  'todo/addTodo',
  async (todoDetails, thunkAPI) => {
    const details = JSON.stringify(todoDetails);
    const state = thunkAPI.getState();
    const uid = state.auth.uid;

    try {
      await updateUser(getDatabase(), uid, details);
      return todoDetails;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
