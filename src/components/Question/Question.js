import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Options } from '../Options/Options';
import { activeClassElector } from '../../utilities/utilities';

import classes from './Question.module.scss';

export const Question = memo(({ qNum, question, options, answers }) => (
  <li className={classes.question}>
    <span
      className={activeClassElector(!answers[qNum], classes.indicator, classes.inactive)}
    />
    <p className={classes.questionText}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {qNum + 1}. {question}
    </p>
    <p className={classes.answerTitle}>Answer</p>
    <Options qNum={qNum} options={options} />
  </li>
));

Question.propTypes = {
  qNum: PropTypes.number.isRequired,
  question: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
