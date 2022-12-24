import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { api } from 'services/api';

export const tokenRequest = createAsyncThunk<
any,
void,
{ rejectValue }
>('auth/token', async (url, { rejectWithValue }) => {
  try {
    const { data } = await api.get('token');

    return data;
  } catch (err) {
    return rejectWithValue((err as AxiosError));
  }
});
