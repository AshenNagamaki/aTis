import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addAnswerCreator } from '../../../store/actionCreators';
import { handleKeyDownCreator, activeClassElector } from '../../../utilities/utilities';

import classes from './Option.module.scss';

export const Option = memo(({ qNum, oNum, option }) => {
  const dispatch = useDispatch();

  const answer = useSelector((state) => state.answers[qNum]);

  const isLoading = useSelector((state) => state.isLoading);

  const literalOpt = String.fromCharCode(65 + oNum);

  const onAddAnswer = (qNumParam, oNumParam) =>
    dispatch(addAnswerCreator(qNumParam, oNumParam));

  const activeClasses = activeClassElector(
    answer !== literalOpt,
    classes.option,
    classes.active
  );

  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={activeClasses}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        !isLoading && onAddAnswer(qNum, literalOpt);
      }}
      onKeyDown={
        (event) => handleKeyDownCreator(event, onAddAnswer(qNum, literalOpt))
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {literalOpt} {option}
    </li>
  );
});

Option.propTypes = {
  qNum: PropTypes.number.isRequired,
  oNum: PropTypes.number.isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
