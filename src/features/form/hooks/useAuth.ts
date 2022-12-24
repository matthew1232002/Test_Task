import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { tokenRequest } from '../redux/auth.actions';
import { selectAuthData, selectAuthState } from '../redux/auth.selectors';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => dispatch(tokenRequest()), [dispatch]);

  const data = useSelector(selectAuthData);
  const state = useSelector(selectAuthState);
  return {
    fetch,
    data,
    state,
  };
};
