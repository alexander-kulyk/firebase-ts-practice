import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userIsLogin, userLogout } from 'service/api';

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
    //----------------registr--------------------
    [registerUser.fulfilled](state, action) {
      const email = action.payload.email;
      const name = action.payload.name;

      state.user = { name, email };
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.isLoading = false;
      state.error = null;
      state.isRefreshing = false;
    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //---------login------------------------

    [userIsLogin.fulfilled](state, action) {
      console.log('action', action.payload);

      const email = action.payload.email;
      const name = action.payload.name;

      state.user = { name, email };
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.isLoading = false;
      state.error = null;
      state.isRefreshing = false;
    },
    [userIsLogin.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.uid = '';
      state.token = null;
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const authSliceReduser = authSlice.reducer;
