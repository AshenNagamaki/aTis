import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestCreator } from '../../store/actionCreators';
import { Autocomplete } from '../UI/Autocomplete/Autocomplete';

import classes from './Main.module.scss';

const mapStateToProps = (state) => {
  return {
    localOpts: state.availableTopics,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTopicsCreator: () => dispatch(requestCreator('GET_TOPICS')),
  };
};

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ localOpts, isLoading, onGetTopicsCreator }) => {
  useEffect(() => {
    onGetTopicsCreator();
  }, [onGetTopicsCreator]);

  return (
    <section className={classes.Main}>
      <h1 className={classes.Title}>
        {isLoading ? 'Wait a second ...' : 'Just start typing ...'}
      </h1>
      {!isLoading && (
        <Autocomplete
          label="Anonymous Testing Intelligent Service"
          options={localOpts}
        />
      )}
    </section>
  );
});
