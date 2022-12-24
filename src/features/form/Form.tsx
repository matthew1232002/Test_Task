import React from 'react';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  Main, Title, FormStyled, BtnContainer, InputField,
} from './Form.styled';

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<any>({
    mode: 'onChange',
  });

  const onSubmitHandler = () => {};

  return (
        <Main>
            <Title variant='h1'>Working with POST request</Title>
            <FormStyled onSubmit={handleSubmit(onSubmitHandler)}>
                <InputField>
                    <TextField
                        label="Your name"
                        type="text"
                        fullWidth
                        {...register('name')}
                    />
                </InputField>
                <InputField>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        {...register('email')}
                    />
                </InputField>
                <InputField>
                    <TextField
                        label="phone"
                        type="text"
                        helperText='+38 (XXX) XXX - XX - XX'
                        fullWidth
                        {...register('phone')}
                    />
                </InputField>
                <BtnContainer>
                    <Button variant='contained' type='submit' fullWidth>Sign up</Button>
                </BtnContainer>
            </FormStyled>
        </Main>
  );
};
