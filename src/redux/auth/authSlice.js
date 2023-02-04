import { createSlice } from '@reduxjs/toolkit';
import {
  refreshUser,
  registerUser,
  userIsLogin,
  userLogout,
} from 'redux/auth/api';

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
      state.isLoggedIn = true;
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
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
      state.isRefreshing = false;
    },
    [userIsLogin.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //--------------logOut------------------------
    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.uid = '';
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [userLogout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // --------------- refresh ----------------
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      console.log('action.payload', action.payload);
      const { name, email, uid } = action.payload;

      state.user = { name, email };
      state.uid = uid;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authSliceReduser = authSlice.reducer;
