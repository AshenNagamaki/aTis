import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

export const Button = ({ bName, bValue, isDisabled, clickHandler, children }) => (
  <button
    className={classes.button}
    type="button"
    name={bName}
    value={bValue}
    disabled={isDisabled}
    onClick={clickHandler}
  >
    {children}
  </button>
);

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  bName: PropTypes.string.isRequired,
  bValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
