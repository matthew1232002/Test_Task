import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Main, UsersList, Title } from './Users.styled';
import { User } from './components/User';
import { useUsers } from './components/hooks/useUsers';

export const Users: React.FC = () => {
  const { fetch, data } = useUsers();

  useEffect(() => {
    fetch();
  }, []);

  return (
        <Main>
            <Title variant='h1'>Working with GET request</Title>
            <UsersList>
                {data && data.map((userItem) => (
                    <User key={userItem.id} data={userItem}/>
                ))}
            </UsersList>
            <Button variant='contained'>Show more</Button>
        </Main>
  );
};
