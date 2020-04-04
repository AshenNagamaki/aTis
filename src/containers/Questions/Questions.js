import React from "react";
import { connect } from "react-redux";

import { Question } from "../../components/Question/Question";
import { addAnswerCreator } from "../../store/actionCreators";

import classes from "./Questions.module.scss";

const mapStateToProps = state => {
  return {
    que: state.questions,
    opt: state.options,
    answ: state.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAnswer: (qNum, oNum) => {
      dispatch(addAnswerCreator(qNum, oNum));
    }
  };
};

export const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  console.log(props);
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
  return <ul className={classes.Questions}>{questionsData}</ul>;
});
