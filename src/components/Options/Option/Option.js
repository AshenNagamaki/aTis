import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addAnswerCreator } from '../../../store/actionCreators';
import {
  handleKeyDown,
  activeClassElector,
} from '../../../utilities/utilities';

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

export const Option = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const literalOpt = String.fromCharCode(65 + props.oNum);

  const activeClasses = activeClassElector(
    props.answersState[props.qNum] !== literalOpt,
    classes.Option,
    classes.Active
  );

  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={activeClasses}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        !props.isLoading && props.onAddAnswer(props.qNum, literalOpt);
      }}
      onKeyDown={handleKeyDown}
    >
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {literalOpt} {props.option}
    </li>
  );
});

Option.propTypes = {
  qNum: PropTypes.number.isRequired,
  oNum: PropTypes.number.isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
