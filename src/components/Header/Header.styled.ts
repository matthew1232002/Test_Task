import styled from '@emotion/styled';
import { calcIndentRhythm, headerHeight } from 'assets/styles/theme';

export const HeaderSpacing = styled.div`
  height: ${headerHeight}px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  background-color: #fff;
  height: ${headerHeight}px;
  z-index: 99;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${calcIndentRhythm(1)};
`;
