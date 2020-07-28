import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addAnswerCreator } from '../../../store/actionCreators';
import { handleKeyDownCreator, activeClassElector } from '../../../utilities/utilities';

import classes from './Option.module.scss';

const mapStateToProps = (state) => {
  return {
    answersState: state.answers,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAnswer: (qNum, oNum) => dispatch(addAnswerCreator(qNum, oNum)),
  };
};

export const Option = memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(({ qNum, oNum, option, answersState, isLoading, onAddAnswer }) => {
    const literalOpt = String.fromCharCode(65 + oNum);

    const activeClasses = activeClassElector(
      answersState[qNum] !== literalOpt,
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
  })
);

Option.propTypes = {
  qNum: PropTypes.number.isRequired,
  oNum: PropTypes.number.isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
