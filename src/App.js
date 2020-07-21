import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { GuardedRoute } from './components/GuardedRoute/GuardedRoute';
import { Main } from './components/Main/Main';
import { QuestionsTablet } from './components/QuestionsTablet/QuestionsTablet';
import { Outcome } from './components/Outcome/Outcome';

const mapStateToProps = (state) => {
  return {
    t: state.test,
    isLoading: state.isLoading,
  };
};

export const App = connect(mapStateToProps)(({ t, isLoading }) => {
  return (
    <Switch>
      <GuardedRoute path="/outcome" component={Outcome} isGuarded={false} />
      <GuardedRoute
        path="/test"
        component={QuestionsTablet}
        isGuarded={false}
      />
      <Route path="*">
        <Main />
      </Route>
    </Switch>
  );
});
