import React from "react";
import { connect } from "react-redux";

import { Question } from "../../components/Question/Question";
import { addAnswerCreator } from "../../store/actionCreators";

import classes from "./Questions.module.scss";

const mapStateToProps = (state) => {
  return {
    que: state.questions,
    opt: state.options,
    answ: state.answers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAnswer: (qNum, oNum) => {
      dispatch(addAnswerCreator(qNum, oNum));
    },
  };
};

export const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const isOnSubmit = !(
    props.answ.filter((answ) => answ).length === props.que.length
  );
  const questionsData = props.que.map((question, index) => (
    <Question
      key={index}
      qNum={index}
      question={question}
      options={props.opt[index]}
      answersState={props.answ}
      onAddAnswer={props.onAddAnswer}
    />
  ));
  return (
    <section className={classes.QuestionsWrapper}>
      <div className={classes.ReturnWrapper}>
        <div className={classes.ReturnArrow}></div>
      </div>
      <ul className={classes.Questions}>{questionsData}</ul>
      <button
        className={classes.SubmitButton}
        type="button"
        name="Answers submit button"
        value="Submit answers"
        disabled={isOnSubmit}
      >
        Submit answers
      </button>
      <button
        className={classes.QuestionsReturn}
        type="button"
        name="Return button"
        value="OR return to the initial window"
      >
        OR return to the initial window
      </button>
      <div className={classes.BackToTopWrapper}>
        <div className={classes.BackToTopArrow}></div>
      </div>
    </section>
  );
});
