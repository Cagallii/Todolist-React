import React, { Suspense, lazy } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import history from 'common/history';
import Loader from 'common/components/Loader';

import styledTheme from './themes/styledTheme';

const App = lazy(() => import('./App'));

library.add(faCircleNotch);

export default () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={styledTheme}>
        <Suspense fallback={<Loader fullPage />}>
          <App />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};
