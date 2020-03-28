import React, { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AppContainer, Container } from './App.s';

const Home = lazy(() => import('./scenes/home/Home'));
const NotFound = lazy(() => import('./scenes/notFound/NotFound'));

export default () => (
  <Container>
    <AppContainer>
      <Switch>
        <Route exact path='/' render={() => <Home />} />

        <Route path='/404' component={NotFound} />
        <Route path='*' render={() => <Redirect to='/404' />} />
      </Switch>
    </AppContainer>
  </Container>
);
