import React from "react";

import { Options } from "./Options/Options";

import classes from "./Question.module.scss";

export const Question = ({ qNum, question, options }) => {
  return (
    <section className={classes.Question}>
      <p className={classes.QuestionText}>
        {qNum}. {question}
      </p>
      <p className={classes.AnswerTitle}>Answer</p>
      <Options options={options} />
    </section>
  );
};
