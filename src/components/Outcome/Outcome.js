import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Button } from '../UI/Button/Button';
import { activeClassElector } from '../../utilities/utilities';

import classes from './Outcome.module.scss';
import outcomeImage from '../../assets/images/outcomeImage.png';

const mapStateToProps = (state) => {
  return {
    reqResp: state.reqResponse,
  };
};

export const Outcome = connect(mapStateToProps)(({ reqResp }) => {
  const history = useHistory();

  const isSuccess = reqResp && !reqResp.reqFailed;

  const activeClass = activeClassElector(
    isSuccess,
    classes.Image,
    classes.OnFailure
  );

  return (
    <div className={classes.Outcome}>
      <LazyLoadImage
        className={activeClass}
        src={outcomeImage}
        alt={isSuccess ? 'Successfully completed' : 'Something went wrong'}
        delayMethod="debounce"
        effect="blur"
        placeholderSrc={outcomeImage}
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

      <Button
        bName="Return button"
        bValue="Return to the initial window"
        clickHandler={() => history.push('/aTis')}
      >
        Take me back
      </Button>
    </div>
  );
});
