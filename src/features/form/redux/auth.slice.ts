import { createSlice } from '@reduxjs/toolkit';
import { tokenRequest } from './auth.actions';

const initialState = {
  state: 'idle',
  data: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tokenRequest.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.state = 'fulfilled';
    });
  },
});

export { authSlice };
