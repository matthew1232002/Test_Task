import React from 'react';
import { Button } from '@mui/material';
import { HeaderStyled, Container, ButtonsWrapper } from './Header.styled';

const { ReactComponent: Logo } = require('assets/images/Logo.svg');

export const Header: React.FC = () => (
        <HeaderStyled>
            <Container>
                <div>
                    <Logo />
                </div>
                <ButtonsWrapper>
                    <Button variant='contained'>Users</Button>
                    <Button variant='contained'>Sign up</Button>
                </ButtonsWrapper>
            </Container>

        </HeaderStyled>
);
