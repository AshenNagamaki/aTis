import React from "react";

import { Options } from "./Options/Options";

import classes from "./Question.module.scss";

export const Question = props => (
  <li className={classes.Question}>
    <p className={classes.QuestionText}>
      {props.qNum + 1}. {props.question}
    </p>
    <p className={classes.AnswerTitle}>Answer</p>
    <Options
      qNum={props.qNum}
      options={props.options}
      answersState={props.answersState}
      onAddAnswer={props.onAddAnswer}
    />
  </li>
);
