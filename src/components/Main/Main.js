import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestCreator } from '../../store/actionCreators';
import { useShallowEqualSelector } from '../../store/hooks';
import { AutocompleteField } from '../UI/AutocompleteField/AutocompleteField';

import classes from './Main.module.scss';

export const Main = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCreator('GET_TOPICS'));
  }, [dispatch]);

  const opts = useShallowEqualSelector((state) => state.availableTopics);

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        {isLoading ? 'Wait a second ...' : 'Just start typing ...'}
      </h1>
      <AutocompleteField
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
});
