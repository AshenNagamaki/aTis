import React from 'react';

import { Button } from '../UI/Button/Button';

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
    <Button bName="Return button" bValue="Return to the initial window">
      Take me back
    </Button>
  </div>
);

export default Outcome;
