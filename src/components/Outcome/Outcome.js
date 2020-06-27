import React from 'react';

import classes from './Outcome.module.scss';
import errorImage from '../../assets/images/errorImage.png';

const Outcome = () => (
  <div className={classes.Outcome}>
    <img
      className={classes.ErrorImage}
      src={errorImage}
      alt="Something went wrong"
    />
    <h1 className={classes.Title}>
      What the ...? Looks like something went wrong!
    </h1>
    <h2 className={classes.Text}>
      We had some issues submitting your answers. Please try again later.
    </h2>
    <button
      className={classes.ReturnButton}
      type="button"
      name="Return button"
      value="Return to the initial window"
    >
      Take Me Back
    </button>
  </div>
);

export default Outcome;
