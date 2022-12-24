import { createSlice } from '@reduxjs/toolkit';
import { usersFetch } from './users.actions';

interface User {
  id: number
  name: string
  email: string
  phone: string
  position: string
  position_id: number
  registration_timestamp: number
  photo: string
}

const initialState = {
  state: 'idle',
  data: [] as User[],
};

const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersFetch.fulfilled, (state, { payload }) => {
      state.data = payload.users;
      state.state = 'fulfilled';
    });
  },
});

export { usersSlice };
