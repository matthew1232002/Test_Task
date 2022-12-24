import React from 'react';
import { HeaderSpacing } from 'components/Header/Header.styled';
import { About } from 'features/about';
import { Users } from 'features/users';
import { Form } from 'features/form';
import { Header } from 'components/Header';
import { MainStyled } from './Main.styled';

export const Main: React.FC = () => (
        <>
            <Header/>
            <MainStyled>
                <HeaderSpacing />
                <About/>
                <Users />
                <Form />
            </MainStyled>
        </>
);
