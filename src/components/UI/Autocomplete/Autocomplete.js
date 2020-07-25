import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ControlButton } from '../ControlButton/ControlButton';
import { requestCreator } from '../../../store/actionCreators';
import { handleKeyDownCreator } from '../../../utilities/utilities';

import classes from './Autocomplete.module.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTestCreator: (topic) => dispatch(requestCreator('GET_TEST', topic)),
  };
};

export const Autocomplete = connect(
  null,
  mapDispatchToProps
)(({ label, options, isActive, onGetTestCreator }) => {
  const [completion, setCompletion] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
  });

  const { activeOption, filteredOptions, showOptions, userInput } = completion;

  const [active, setActive] = useState(!isActive);

  const history = useHistory();

  const changeHandler = (e) => {
    const currentUserInput = e.currentTarget.value;

    const forFilteredOptions = options.filter(
      (option) =>
        option.toLowerCase().indexOf(currentUserInput.toLowerCase()) > -1
    );

    setCompletion({
      activeOption: 0,
      filteredOptions: forFilteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  const clickHandler = (e) => {
    setCompletion({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const getTestOnClickHandler = () => {
    onGetTestCreator(completion.userInput);
    history.push('/test');
  };

  const changeOptionHandler = (nextOption) => {
    setCompletion((prevState) => ({ ...prevState, activeOption: nextOption }));
  };

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setCompletion((prevState) => ({
        ...prevState,
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      }));
    } else if (e.keyCode === 38) {
      // eslint-disable-next-line no-unused-expressions
      activeOption === 0
        ? changeOptionHandler(filteredOptions.length - 1)
        : changeOptionHandler(activeOption - 1);
    } else if (e.keyCode === 40) {
      // eslint-disable-next-line no-unused-expressions
      activeOption === filteredOptions.length - 1
        ? changeOptionHandler(0)
        : changeOptionHandler(activeOption + 1);
    }
  };

  let optionList;

  if (userInput && showOptions) {
    if (filteredOptions.length !== 0) {
      optionList = (
        <ul className={classes.Options}>
          {filteredOptions.map((option, index) => (
            <li
              role="menuitem"
              className={index === activeOption ? classes.Active : undefined}
              key={option}
              onClick={clickHandler}
              onKeyDown={
                (event) => handleKeyDownCreator(event, clickHandler)
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              {option}
            </li>
          ))}
        </ul>
      );
    } else {
      optionList = (
        <div className={classes.NoShow}>
          Nothing to show. You are on your own!
        </div>
      );
    }
  }

  const continueButton = (
    <ControlButton
      direction="right"
      outerClass={classes.ContinueWrapper}
      title="Continue to the test"
      clickHandler={getTestOnClickHandler}
    />
  );

  const classNameInUse = useMemo(
    () =>
      `${classes.InputField} ${
        (!isActive ? active : active || userInput) && classes.Active
      } ${!isActive && !active && classes.Inactive}`,
    [isActive, userInput, active]
  );

  return (
    <>
      <div className={classNameInUse}>
        <input
          id="autocomplete"
          type="text"
          name="Autocomplete input field"
          value={userInput}
          placeholder={label}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          onFocus={() => isActive && setActive(true)}
          onBlur={() => isActive && setActive(false)}
          disabled={!isActive}
          autoComplete="off"
        />
        <label htmlFor="autocomplete">{label}</label>
        {isActive && userInput && options.includes(userInput) && continueButton}
      </div>
      {optionList}
    </>
  );
});

Autocomplete.defaultProps = {
  label: 'I am a default label! My owner is too lazy to change me.',
  isActive: true,
};

Autocomplete.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
};
