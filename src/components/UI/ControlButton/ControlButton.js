import React from 'react';
import PropTypes from 'prop-types';

import { handleKeyDownCreator } from '../../../utilities/utilities';

import classes from './ControlButton.module.scss';

export const ControlButton = ({
  direction,
  outerClass,
  title,
  clickHandler,
}) => {
  let innerClass;

  switch (direction) {
    case 'top':
      innerClass = classes.ArrowTop;
      break;
    case 'right':
      innerClass = classes.ArrowRight;
      break;
    case 'bottom':
      innerClass = classes.ArrowBottom;
      break;
    case 'left':
      innerClass = classes.ArrowLeft;
      break;
    default:
      break;
  }

  return (
    <div className={outerClass}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <span
        role="button"
        tabIndex={0}
        className={innerClass}
        title={title}
        onClick={clickHandler}
        onKeyDown={
          (event) => handleKeyDownCreator(event, clickHandler)
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </div>
  );
};

ControlButton.defaultProps = {
  direction: 'top',
  title: 'Control button',
};

ControlButton.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  outerClass: PropTypes.string.isRequired,
  title: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
