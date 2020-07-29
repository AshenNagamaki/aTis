import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { QuestionsTablet } from './components/QuestionsTablet/QuestionsTablet';
import { Outcome } from './components/Outcome/Outcome';

export const App = () => (
  <Switch>
    <Route exact sensitive path="/aTis/outcome" component={Outcome} />
    <Route exact sensitive path="/aTis/test" component={QuestionsTablet} />
    <Route path="*" component={Main} />
  </Switch>
);
