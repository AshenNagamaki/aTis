import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { Question } from '../Question/Question';
import { Button } from '../UI/Button/Button';
import { ControlButton } from '../UI/ControlButton/ControlButton';
import { clearStateCreator, requestCreator } from '../../store/actionCreators';
import { scrollToTop, objectKeysLength } from '../../utilities/utilities';

import classes from './QuestionsTablet.module.scss';

const mapStateToProps = (state) => {
  return {
    testData: state.test,
    answ: state.answers,
    isLoading: state.isLoading,
    reqResp: state.reqResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostAnswerCreator: (title, answ) =>
      dispatch(requestCreator('POST_ANSWER', title, answ)),
    onClearStateCreator: () => dispatch(clearStateCreator()),
  };
};

export const QuestionsTablet = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    testData,
    answ,
    isLoading,
    reqResp,
    onPostAnswerCreator,
    onClearStateCreator,
    history,
  }) => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    const isMountedRef = useRef(null);

    const { topic, author, questions, options } = testData;

    const returnOnClickHandler = () => {
      onClearStateCreator();
      history.push('/');
    };

    const toggleScrollVisibility = () => {
      // eslint-disable-next-line no-unused-expressions
      isMountedRef.current && window.pageYOffset > 325
        ? setIsScrollVisible(true)
        : setIsScrollVisible(false);
    };

    useEffect(() => {
      isMountedRef.current = true;
      document.addEventListener('scroll', toggleScrollVisibility);
      return () => {
        isMountedRef.current = false;
        window.removeEventListener('scroll', toggleScrollVisibility);
      };
    }, []);

    useEffect(() => {
      if (objectKeysLength(reqResp) > 1) {
        history.push('/outcome');
      }
    }, [reqResp, history]);

    const isOnSubmit =
      questions &&
      questions.length &&
      JSON.parse(JSON.stringify(answ)).filter((el) => el).length ===
        questions.length;

    const returnButton = (
      <ControlButton
        direction="left"
        outerClass={classes.ReturnWrapper}
        title="Return to the initial window"
        clickHandler={returnOnClickHandler}
      />
    );

    const scrollToTopButton = (
      <ControlButton
        direction="top"
        outerClass={classes.BackToTopWrapper}
        title="Back to top"
        clickHandler={scrollToTop}
      />
    );

    const loader = <Loader type="Audio" visible={isLoading} color="#f7f7f7" />;

    const questionsData =
      questions &&
      questions.length &&
      questions.map((question, index) => (
        <Question
          key={`${question}`}
          qNum={index}
          question={question}
          options={options && options[index]}
        />
      ));

    const submitInterface = (
      <>
        <Button
          bName="Answers submit button"
          bValue="Submit answers"
          isDisabled={!isOnSubmit || isLoading}
          clickHandler={() => onPostAnswerCreator(topic, answ)}
        >
          {isOnSubmit
            ? 'Submit answers'
            : 'Please answer all the questions to proceed'}
        </Button>
        <button
          className={classes.QuestionsReturn}
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
      <section className={classes.QuestionsWrapper}>
        <h1 className={classes.Title}>{topic}</h1>
        <h3 className={classes.Author}>{author && `by ${author}`}</h3>
        {!isLoading && returnButton}
        <ul className={classes.Questions}>{questionsData}</ul>
        {isLoading ? loader : submitInterface}
        {isScrollVisible && scrollToTopButton}
      </section>
    );

    return isLoading || objectKeysLength(testData) ? (
      questionsTablet
    ) : (
      <Redirect exact strict sensitive from="/test" to="/" />
    );
  }
);
