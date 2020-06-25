import React from 'react';
import PropTypes from 'prop-types';

import { Option } from './Option/Option';

import classes from './Options.module.scss';

export const Options = ({ qNum, options, answersState, onAddAnswer }) => {
  const optionsData = options.map((option, index) => (
    <Option
      key={option}
      qNum={qNum}
      oNum={index}
      option={option}
      answersState={answersState}
      onAddAnswer={onAddAnswer}
    />
  ));
  return <ol className={classes.Options}>{optionsData}</ol>;
};

Options.propTypes = {
  qNum: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  answersState: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};
