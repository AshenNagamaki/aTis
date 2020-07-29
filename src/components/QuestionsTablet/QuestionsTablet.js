import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { useShallowEqualSelector } from '../../store/hooks';
import { Question } from '../Question/Question';
import { Button } from '../UI/Button/Button';
import { ControlButton } from '../UI/ControlButton/ControlButton';
import { clearStateCreator, requestCreator } from '../../store/actionCreators';
import { scrollToTop, objectKeysLength } from '../../utilities/utilities';

import classes from './QuestionsTablet.module.scss';

const selectRequestResponseState = createSelector(
  (state) => state.reqResponse,
  (reqResponse) => objectKeysLength(reqResponse)
);

// eslint-disable-next-line react/prop-types
export const QuestionsTablet = memo(({ history }) => {
  const dispatch = useDispatch();

  const testData = useShallowEqualSelector((state) => state.test);

  const { topic, author, questions, options } = testData;

  const answ = useShallowEqualSelector((state) => state.answers);

  const isLoading = useSelector((state) => state.isLoading);

  const reqRespLength = useSelector(selectRequestResponseState);

  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const returnOnClickHandler = () => {
    dispatch(clearStateCreator());
    // eslint-disable-next-line react/prop-types
    history.push('/aTis');
  };

  const submitAnswersClickHandler = useCallback(
    () => dispatch(requestCreator('POST_ANSWER', topic, answ)),
    [topic, answ, dispatch]
  );

  const toggleScrollVisibility = () => {
    // eslint-disable-next-line no-unused-expressions
    window.pageYOffset > 325 ? setIsScrollVisible(true) : setIsScrollVisible(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleScrollVisibility);
    return () => {
      window.removeEventListener('scroll', toggleScrollVisibility);
    };
  }, []);

  useEffect(() => {
    if (reqRespLength > 1) {
      // eslint-disable-next-line react/prop-types
      history.push('/aTis/outcome');
    }
  }, [reqRespLength, history]);

  const isOnSubmit = useMemo(
    () =>
      questions &&
      questions.length !== 0 &&
      JSON.parse(JSON.stringify(answ)).filter((el) => el).length === questions.length,
    [questions, answ]
  );

  const returnButton = (
    <ControlButton
      direction="left"
      outerClass={classes.returnWrapper}
      title="Return to the initial window"
      clickHandler={returnOnClickHandler}
    />
  );

  const scrollToTopButton = (
    <ControlButton
      direction="top"
      outerClass={classes.backToTopWrapper}
      title="Back to top"
      clickHandler={scrollToTop}
    />
  );

  const loader = (
    <Loader type="Bars" width={60} height={60} color="#f7f7f7" visible={isLoading} />
  );

  const questionsData =
    questions &&
    questions.length !== 0 &&
    questions.map((question, index) => (
      <Question
        key={`${question}`}
        qNum={index}
        question={question}
        options={options && options[index]}
        answers={answ}
      />
    ));

  const submitInterface = (
    <>
      <Button
        bName="Answers submit button"
        bValue="Submit answers"
        isDisabled={!isOnSubmit || isLoading}
        clickHandler={submitAnswersClickHandler}
      >
        {isOnSubmit ? 'Submit answers' : 'Please answer all the questions to proceed'}
      </Button>
      <button
        className={classes.questionsReturn}
        type="button"
        name="Return button"
        value="OR return to the initial window"
        onClick={returnOnClickHandler}
      >
        OR return to the initial window
      </button>
    </>
  );

  const questionsTablet = (
    <section className={classes.questionsWrapper}>
      <h1 className={classes.title}>{topic}</h1>
      <h3 className={classes.author}>{author && `by ${author}`}</h3>
      {!isLoading && returnButton}
      <ul className={classes.questions}>{questionsData}</ul>
      {isLoading ? loader : submitInterface}
      {isScrollVisible && scrollToTopButton}
    </section>
  );

  return isLoading || objectKeysLength(testData) > 1 ? (
    questionsTablet
  ) : (
    <Redirect exact strict sensitive from="/aTis/test" to="/aTis" />
  );
});
