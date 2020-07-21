import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Question } from '../Question/Question';
import { Button } from '../UI/Button/Button';
import { Loader } from '../UI/Loader/Loader';

import { requestCreator } from '../../store/actionCreators';
import { scrollToTop, handleKeyDown } from '../../utilities/utilities';

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
  };
};

export const QuestionsTablet = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const { topic, author, questions, options } = props.testData;

  const history = useHistory();

  const toggleScrollVisibility = () => {
    // eslint-disable-next-line no-unused-expressions
    window.pageYOffset > 325
      ? setIsScrollVisible(true)
      : setIsScrollVisible(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleScrollVisibility);
    return () => window.removeEventListener('scroll', toggleScrollVisibility);
  }, []);

  const isOnSubmit =
    questions &&
    questions.length &&
    JSON.parse(JSON.stringify(props.answ)).filter((el) => el).length ===
      questions.length;

  const returnButton = (
    <div className={classes.ReturnWrapper}>
      <span
        className={classes.ReturnArrow}
        title="Return to the initial window"
      />
    </div>
  );

  const scrollToTopButton = (
    <div className={classes.BackToTopWrapper}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <span
        role="button"
        tabIndex={0}
        className={classes.BackToTopArrow}
        title="Back to top"
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
      />
    </div>
  );

  const questionsData =
    questions &&
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
        isDisabled={!isOnSubmit || props.isLoading}
        clickHandler={
          () => props.onPostAnswerCreator(topic, props.answ)
          // eslint-disable-next-line react/jsx-curly-newline
        }
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
      >
        OR return to the initial window
      </button>
    </>
  );

  if (Object.keys(props.reqResp).length > 1) {
    history.push('/outcome');
  }

  const questionsTablet = (
    <section className={classes.QuestionsWrapper}>
      <h1 className={classes.Title}>{topic}</h1>
      <h3 className={classes.Author}>{author && `by ${author}`}</h3>
      {!props.isLoading && returnButton}
      <ul className={classes.Questions}>{questionsData}</ul>
      {props.isLoading ? (
        <section className={classes.Loading}>
          <Loader />
        </section>
      ) : (
        submitInterface
      )}
      {isScrollVisible && scrollToTopButton}
    </section>
  );

  return questionsTablet;
});
