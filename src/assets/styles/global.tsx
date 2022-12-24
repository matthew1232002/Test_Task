import React from 'react';
import { Global, css } from '@emotion/react';
import { colorBackground, fontPrimaryURL } from 'assets/styles/theme';

export const GlobalStyles = () => (
        <Global
            styles={css`
              @import url(${fontPrimaryURL});

              html,
              body,
              #root {
                height: 100%;
              }
              
              body {
                font-family: 'Nunito', sans-serif;
                color: black;
                background-color: ${colorBackground};
              }
            `}
        />
);

export default GlobalStyles;
