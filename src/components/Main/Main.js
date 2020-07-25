import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';

import { requestCreator } from '../../store/actionCreators';
import { Autocomplete } from '../UI/Autocomplete/Autocomplete';

import classes from './Main.module.scss';

const mapStateToProps = (state) => {
  return {
    opts: state.availableTopics,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTopicsCreator: () => dispatch(requestCreator('GET_TOPICS')),
  };
};

export const Main = memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(({ opts, isLoading, onGetTopicsCreator }) => {
    useEffect(() => {
      onGetTopicsCreator();
    }, [onGetTopicsCreator]);

    return (
      <main className={classes.Main}>
        <h1 className={classes.Title}>
          {isLoading ? 'Wait a second ...' : 'Just start typing ...'}
        </h1>
        {!isLoading && (
          <Autocomplete
            label="Anonymous Testing Intelligent Service"
            options={opts}
          />
        )}
      </main>
    );
  })
);
