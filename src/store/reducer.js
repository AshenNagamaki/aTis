import * as actionTypes from "./actionTypes";

const initialState = {
  questions: [],
  options: [],
  answers: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWER:
      if (state.answers[action.questionNumber] !== action.optionNumber) {
        const updatedAnswers = [...state.answers];
        updatedAnswers[action.questionNumber] = action.optionNumber;
        return { ...state, answers: updatedAnswers };
      }
  }
  return state;
};
