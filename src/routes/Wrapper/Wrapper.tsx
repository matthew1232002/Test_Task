import React from 'react';
import { WrapperStyled } from 'routes/Wrapper/Wrapper.styled';
import { Outlet } from 'react-router-dom';

export const Wrapper: React.FC = () => (
        <WrapperStyled>
            <Outlet/>
        </WrapperStyled>
);
