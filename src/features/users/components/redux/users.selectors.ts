import { RootState } from 'store/store';
import { createSelector } from '@reduxjs/toolkit';

export const getUsers = (state: RootState) => state.users;
export const selectUsersData = createSelector(getUsers, ({ data }) => data);
export const selectUsersState = createSelector(getUsers, ({ state }) => state);
