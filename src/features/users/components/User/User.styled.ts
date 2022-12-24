import styled from '@emotion/styled';
import { Card } from '@mui/material';
import { calcIndentRhythm } from 'assets/styles/theme';

export const CardStyled = styled(Card)`
  padding: ${calcIndentRhythm(2)};
  max-width: 370px;
 border-radius: 16px;
  box-shadow: none;
  text-align: center;
  flex: 1 1;
  min-width: 328px;
`;

export const Avatar = styled.div`
  margin-bottom: ${calcIndentRhythm(2)};
`;

export const Image = styled.img`
 border-radius: 50%;
`;

export const Name = styled.div`
  margin-bottom: ${calcIndentRhythm(2)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
