import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../UI/Button/Button';

import classes from './Outcome.module.scss';
import outcomeImage from '../../assets/images/outcomeImage.png';

const Outcome = ({ isSuccess }) => {
  const activeClass = isSuccess
    ? classes.Image
    : `${classes.Image} ${classes.OnFailure}`;
  return (
    <div className={classes.Outcome}>
      <img
        className={activeClass}
        src={outcomeImage}
        alt={isSuccess ? 'Successfully completed' : 'Something went wrong'}
      />
      <h1 className={classes.Title}>
        {isSuccess ? 'Success!' : 'What the ...?'}
      </h1>
      <h5 className={classes.Topic}>
        {isSuccess
          ? 'Your results were successfully submitted for review!'
          : 'Looks like something went wrong!'}
      </h5>
      <h5 className={classes.Text}>
        {isSuccess
          ? `Don't know what to do next? Go back and explore some other stuff.`
          : 'We had some issues submitting your answers. Please try again later.'}
      </h5>

      <Button bName="Return button" bValue="Return to the initial window">
        Take me back
      </Button>
    </div>
  );
};

Outcome.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
};

export default Outcome;
