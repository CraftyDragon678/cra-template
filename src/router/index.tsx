import React from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { Root } from '@src/pages';
import history from './history';

const App: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  </Router>
);

export default App;
