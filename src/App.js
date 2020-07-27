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
    <Route exact sensitive path="/aTis/outcome">
      {objectKeysLength(reqResp) > 1 ? (
        <Outcome />
      ) : (
        <Redirect exact strict sensitive from="/aTis/outcome" to="/aTis" />
      )}
    </Route>
    <Route exact sensitive path="/aTis/test" component={QuestionsTablet} />
    <Route path="*" component={Main} />
  </Switch>
));
