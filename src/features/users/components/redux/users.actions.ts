import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { api } from 'services/api';

export const usersFetch = createAsyncThunk<
any,
void,
{ rejectValue }
>('auth/token', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('users');

    return data;
  } catch (err) {
    return rejectWithValue((err as AxiosError));
  }
});
