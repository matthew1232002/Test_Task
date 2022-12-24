import { authSlice } from 'features/form/redux/auth.slice';
import { usersSlice } from 'features/users/components/redux/users.slice';

export const rootReducer = {
  auth: authSlice.reducer,
  users: usersSlice.reducer,
};
