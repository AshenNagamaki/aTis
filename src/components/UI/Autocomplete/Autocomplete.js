import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { activeClassElector } from '../../../utilities/utilities';

import classes from './Autocomplete.module.scss';

export const handleKeyDown = (event) => {
  if (event.keyCode === 45) {
    return '[KEY_DOWN_HANDLER] Autocomplete input field element keyboard listener on "Insert".';
  }
  return '[KEY_DOWN_HANDLER] The corresponding keyboard key was not pressed.';
};

export const Autocomplete = ({ label, options, isActive }) => {
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

  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className={classes.Options}>
          {filteredOptions.map((option, index) => (
            <li
              role="menuitem"
              className={activeClassElector(
                index === activeOption,
                classes.Option,
                classes.Active
              )}
              key={option}
              onClick={clickHandler}
              onKeyDown={handleKeyDown}
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

  const classNameInUse = `${classes.InputField} ${
    (!isActive ? active : active || userInput) && classes.Active
  } ${!isActive && !active && classes.Inactive}`;

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
      </div>
      {optionList}
    </>
  );
};

Autocomplete.defaultProps = {
  label: 'I am a default label! My owner is too lazy to change me.',
  isActive: false,
};

Autocomplete.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
};
