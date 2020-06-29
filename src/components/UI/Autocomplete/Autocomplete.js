import React, { useState } from 'react';

export const Autocomplete = ({ options }) => {
  const [completion, setCompletion] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
  });

  const { activeOption, filteredOptions, showOptions, userInput } = completion;

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
};
