import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { calcIndentRhythm, colorWhite } from 'assets/styles/theme';

const backgroundImage = require('assets/images/background_desktop.png');

export const Main = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(${backgroundImage}) top center no-repeat;
  flex: 0 0 650px;
  margin-bottom: ${calcIndentRhythm(14)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  align-items: center;
  text-align: center;
`;

export const Title = styled(Typography)`
  color: ${colorWhite};
  margin-bottom: 21px;
`;

export const Text = styled(Typography)`
  color: ${colorWhite};
  margin-bottom: 32px;
`;

export const BtnContainer = styled(Typography)`
  width: 100px;
`;
