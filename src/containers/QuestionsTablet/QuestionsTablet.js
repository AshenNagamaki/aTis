import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Question } from '../../components/Question/Question';
import { Loader } from '../../components/Loader/Loader';
import { postAnswerCreator } from '../../store/actionCreators';
import { scrollToTop, handleKeyDown } from '../../utilities/utilities';

import classes from './QuestionsTablet.module.scss';

const mapStateToProps = (state) => {
  return {
    title: state.title,
    author: state.author,
    que: state.questions,
    opt: state.options,
    answ: state.answers,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostAnswerCreator: (answ) => dispatch(postAnswerCreator(answ)),
  };
};

export const QuestionsTablet = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const toggleScrollVisibility = () => {
    // eslint-disable-next-line no-unused-expressions
    window.pageYOffset > 325
      ? setIsScrollVisible(true)
      : setIsScrollVisible(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleScrollVisibility);
    return () => window.removeEventListener('scroll', toggleScrollVisibility);
  });

  const isOnSubmit =
    props.que.length &&
    JSON.parse(JSON.stringify(props.answ)).filter((el) => el).length ===
      props.que.length;

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

  const questionsData = props.que.map((question, index) => (
    <Question
      key={`${question}`}
      qNum={index}
      question={question}
      options={props.opt[index]}
    />
  ));

  const submitInterface = (
    <>
      <button
        className={classes.SubmitButton}
        type="button"
        name="Answers submit button"
        value="Submit answers"
        disabled={!isOnSubmit || props.isLoading}
        onClick={() => props.onPostAnswerCreator(props.answ)}
      >
        {isOnSubmit
          ? 'Submit answers'
          : 'Please answer all the questions to proceed'}
      </button>
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

  return (
    <section className={classes.QuestionsWrapper}>
      <h1 className={classes.Title}>{props.title}</h1>
      <h3 className={classes.Author}>{props.author && `by ${props.author}`}</h3>
      <div className={classes.ReturnWrapper}>
        <span
          className={classes.ReturnArrow}
          title="Return to the initial window"
        />
      </div>
      <ul className={classes.Questions}>{questionsData}</ul>
      {props.isLoading ? <Loader /> : submitInterface}
      {isScrollVisible && scrollToTopButton}
    </section>
  );
});
