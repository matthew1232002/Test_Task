import styled from '@emotion/styled';
import { calcIndentRhythm } from 'assets/styles/theme';
import { Typography } from '@mui/material';

export const Main = styled.section`
    text-align: center;
  margin-bottom: ${calcIndentRhythm(14)};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  margin: 0 auto;
`;

export const Title = styled(Typography)`
  margin-bottom: ${calcIndentRhythm(5)};
`;

export const BtnContainer = styled.div`
  margin: 0 auto ${calcIndentRhythm(14)};
  width: 100px;
`;

export const InputField = styled.div`
  margin-bottom: ${calcIndentRhythm(5)};
`;
