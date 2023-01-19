import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from 'service/api';

const initialState = {
  user: { name: null, email: null },
  uid: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [registerUser.fulfilled](state, action) {
      console.log('action', action.payload);

      const email = action.payload.email;
      const name = action.payload.name;

      state.user = { name, email };
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = null;
    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authSliceReduser = authSlice.reducer;
