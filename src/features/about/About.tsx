import React from 'react';
import { Button } from '@mui/material';
import {
  Main, Title, Text, Container, BtnContainer,
} from './About.styled';

export const About: React.FC = () => (
        <Main>
            <Container>
                <Title variant='h1'>Test assignment for front-end developer</Title>
                <Text>What defines a good front-end developer is one that has skilled
                    knowledge of HTML, CSS, JS with a
                    vast understanding of User design thinking as they'll
                    be building web interfaces with accessibility
                    in mind. They should also be excited to learn, as the world
                    of Front-End Development keeps
                    evolving.</Text>
                <BtnContainer>
                    <Button variant='contained'>Sign up</Button>
                </BtnContainer>
            </Container>
        </Main>
);
