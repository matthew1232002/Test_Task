import React from 'react';
import {
  CardStyled, Avatar, Name, Image,
} from './User.styled';

const { ReactComponent } = require('assets/images/avatar.svg');

export const User = ({ data }: any) => (
        <CardStyled>
            <Avatar>
                {data.photo ? (
                    <Image src={data.photo}/>
                ) : <ReactComponent />}
            </Avatar>
            <Name>{data.name}</Name>
            <div>{data.position}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
        </CardStyled>
);
