import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { QuestionsTablet } from './components/QuestionsTablet/QuestionsTablet';
import { Outcome } from './components/Outcome/Outcome';
import { objectKeysLength } from './utilities/utilities';

const mapStateToProps = (state) => ({
  reqResp: state.reqResponse,
});

export const App = connect(mapStateToProps)(({ reqResp }) => (
  <Switch>
    <Route exact sensitive path="/outcome" component={Outcome}>
      {objectKeysLength(reqResp) > 1 ? (
        <Outcome />
      ) : (
        <Redirect exact strict sensitive from="/outcome" to="/" />
      )}
    </Route>
    <Route exact sensitive path="/test" component={QuestionsTablet} />
    <Route path="*" component={Main} />
  </Switch>
));
