import React from 'react';
import PropTypes from 'prop-types';

import { handleKeyDown } from '../../../../utilities/utilities';

import classes from './Option.module.scss';

export const Option = ({ qNum, oNum, option, answersState, onAddAnswer }) => {
  const literalOpt = String.fromCharCode(65 + oNum);
  const activeClasses =
    answersState[qNum] === literalOpt
      ? `${classes.Option} ${classes.Active}`
      : classes.Option;
  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={activeClasses}
      onClick={() => onAddAnswer(qNum, literalOpt)}
      onKeyDown={handleKeyDown}
    >
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {literalOpt} {option}
    </li>
  );
};

Option.propTypes = {
  qNum: PropTypes.number.isRequired,
  oNum: PropTypes.number.isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  answersState: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};
