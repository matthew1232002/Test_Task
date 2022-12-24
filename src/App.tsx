import React, { useEffect } from 'react';
import { routesConfig } from 'routes';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, theme } from 'assets/styles/theme';
import GlobalStyles from 'assets/styles/global';
import { useAuth } from 'features/form/hooks/useAuth';

function App() {
  const routes = useRoutes(routesConfig);
  const { fetch } = useAuth();

  useEffect(() => {
    fetch();
  }, []);

  return (
        <CssBaseline>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                    {routes}
            </ThemeProvider>
        </CssBaseline>
  );
}

export default App;
