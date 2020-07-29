import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ControlButton } from '../ControlButton/ControlButton';
import { requestCreator } from '../../../store/actionCreators';
import { handleKeyDownCreator } from '../../../utilities/utilities';

import classes from './AutocompleteField.module.scss';

export const AutocompleteField = ({ label, options, isActive }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [completion, setCompletion] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
  });

  const { activeOption, filteredOptions, showOptions, userInput } = completion;

  const [active, setActive] = useState(!isActive);

  const changeHandler = (e) => {
    const currentUserInput = e.currentTarget.value;

    const forFilteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(currentUserInput.toLowerCase()) > -1
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
    dispatch(requestCreator('GET_TEST', userInput));
    history.push('/aTis/test');
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
        userInput: filteredOptions[activeOption] || prevState.userInput,
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
        <ul className={classes.options}>
          {filteredOptions.map((option, index) => (
            <li
              role="menuitem"
              className={index === activeOption ? classes.optionActive : undefined}
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
        <div className={classes.noShow}>Nothing to show. You are on your own!</div>
      );
    }
  }

  const continueButton = (
    <ControlButton
      direction="right"
      outerClass={classes.continueWrapper}
      title="Continue to the test"
      clickHandler={getTestOnClickHandler}
    />
  );

  const classNameInUse = useMemo(
    () =>
      `${classes.inputField} ${
        (!isActive ? active : active || userInput) && classes.active
      } ${!isActive && !active && classes.inactive}`,
    [isActive, userInput, active]
  );

  return (
    <>
      <div className={classNameInUse}>
        <input
          id="autocomplete-field"
          type="text"
          name="Autocomplete input field"
          value={userInput}
          placeholder={isActive ? label : null}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          onFocus={() => isActive && setActive(true)}
          onBlur={() => isActive && setActive(false)}
          disabled={!isActive}
          autoComplete="off"
        />
        <label htmlFor="autocomplete-field">{isActive && label}</label>
        {isActive && userInput && options.includes(userInput) && continueButton}
      </div>
      {optionList}
    </>
  );
};

AutocompleteField.defaultProps = {
  label: 'I am a default label! My owner is too lazy to change me.',
  isActive: true,
};

AutocompleteField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
};
