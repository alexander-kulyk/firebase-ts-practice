import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgList: [],
  idImgUser: '',
};
const userImgSlice = createSlice({
  name: 'userImg',
  initialState,

  reducers: {
    addImgUser(state, action) {
      state.imgList = action.payload;
    },
    addIdImgUser(state, action) {
      state.idImgUser = action.payload;
    },
  },
});

export const { addImgUser, addIdImgUser } = userImgSlice.actions;
export const imgUserSliceReduser = userImgSlice.reducer;
