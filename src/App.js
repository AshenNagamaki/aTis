import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { QuestionsTablet } from './components/QuestionsTablet/QuestionsTablet';
import { Outcome } from './components/Outcome/Outcome';

export const App = () => (
  <Switch>
    <Route path="/outcome" component={Outcome} exact sensitive />
    <Route path="/test" component={QuestionsTablet} exact sensitive />
    <Route path="*" component={Main} />
  </Switch>
);
