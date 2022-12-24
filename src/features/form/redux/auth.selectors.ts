import { RootState } from 'store/store';
import { createSelector } from '@reduxjs/toolkit';

export const getAuth = (state: RootState) => state.auth;
export const selectAuthData = createSelector(getAuth, ({ data }) => data);
export const selectAuthState = createSelector(getAuth, ({ state }) => state);
