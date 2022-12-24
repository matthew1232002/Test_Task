import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { calcIndentRhythm } from 'assets/styles/theme';

export const Main = styled.section`
  text-align: center;
  margin-bottom: ${calcIndentRhythm(14)};
`;

export const UsersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: ${calcIndentRhythm(5)};
`;

export const Title = styled(Typography)`
  margin-bottom: ${calcIndentRhythm(5)};
`;
