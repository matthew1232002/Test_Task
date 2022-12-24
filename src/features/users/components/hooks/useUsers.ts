import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { usersFetch } from '../redux/users.actions';
import { selectUsersData, selectUsersState } from '../redux/users.selectors';

export const useUsers = () => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => dispatch(usersFetch()), [dispatch]);

  const data = useSelector(selectUsersData);
  const state = useSelector(selectUsersState);
  return {
    fetch,
    data,
    state,
  };
};
