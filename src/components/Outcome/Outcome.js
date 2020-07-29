import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useShallowEqualSelector } from '../../store/hooks';
import { Button } from '../UI/Button/Button';
import { activeClassElector, objectKeysLength } from '../../utilities/utilities';

import classes from './Outcome.module.scss';
import outcomeImage from '../../assets/images/outcomeImage.png';

// eslint-disable-next-line react/prop-types
export const Outcome = memo(({ history }) => {
  const reqResp = useShallowEqualSelector((state) => state.reqResponse);

  const isSuccess = !reqResp.reqFailed;

  const activeClass = activeClassElector(isSuccess, classes.image, classes.onFailure);

  const outcome = (
    <div className={classes.outcome}>
      <LazyLoadImage
        className={activeClass}
        src={outcomeImage}
        alt={isSuccess ? 'Successfully completed' : 'Something went wrong'}
        delayMethod="debounce"
        effect="blur"
        placeholderSrc={outcomeImage}
      />
      <h1 className={classes.status}>{isSuccess ? 'Success!' : 'What the ...?'}</h1>
      <h5 className={classes.topic}>
        {isSuccess
          ? 'Your results were successfully submitted for review!'
          : 'Looks like something went wrong!'}
      </h5>
      <h5 className={classes.message}>
        {isSuccess
          ? `Don't know what to do next? Go back and explore some other stuff.`
          : 'We had some issues submitting your answers. Please try again later.'}
      </h5>
      <Button
        bName="Return button"
        bValue="Return to the initial window"
        // eslint-disable-next-line react/prop-types
        clickHandler={() => history.push('/aTis')}
      >
        Take me back
      </Button>
    </div>
  );

  return objectKeysLength(reqResp) > 1 ? (
    outcome
  ) : (
    <Redirect exact strict sensitive from="/aTis/outcome" to="/aTis" />
  );
});
