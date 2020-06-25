import React from 'react';
import PropTypes from 'prop-types';

import { Options } from './Options/Options';

import classes from './Question.module.scss';

export const Question = ({
  qNum,
  question,
  options,
  answersState,
  onAddAnswer,
}) => (
  <li className={classes.Question}>
    <p className={classes.QuestionText}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {qNum + 1}. {question}
    </p>
    <p className={classes.AnswerTitle}>Answer</p>
    <Options
      qNum={qNum}
      options={options}
      answersState={answersState}
      onAddAnswer={onAddAnswer}
    />
  </li>
);

Question.propTypes = {
  qNum: PropTypes.number.isRequired,
  question: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  answersState: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};
