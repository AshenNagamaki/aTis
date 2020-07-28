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
      <main className={classes.main}>
        <h1 className={classes.title}>
          {isLoading ? 'Wait a second ...' : 'Just start typing ...'}
        </h1>
        <Autocomplete
          label="Anonymous Testing Intelligent Service"
          options={opts}
          isActive={!isLoading}
        />
        <footer className={classes.footer}>
          {`v${process.env.REACT_APP_VERSION}`}
          <a
            href={process.env.REACT_APP_AUTHOR_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Change my mind
          </a>
        </footer>
      </main>
    );
  })
);
