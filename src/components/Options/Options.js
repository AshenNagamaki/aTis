import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Option } from './Option/Option';

import classes from './Options.module.scss';

export const Options = memo(({ qNum, options }) => {
  const optionsData = options.map((option, index) => (
    <Option key={option} qNum={qNum} oNum={index} option={option} />
  ));

  return <ol className={classes.options}>{optionsData}</ol>;
});

Options.propTypes = {
  qNum: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};
