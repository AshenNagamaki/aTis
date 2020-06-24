import { initialState } from './initialState';
import * as actionTypes from './actionTypes';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWER:
      if (state.answers[action.questionNumber] !== action.optionNumber) {
        const updatedAnswers = [...state.answers];
        updatedAnswers[action.questionNumber] = action.optionNumber;
        return { ...state, answers: updatedAnswers };
      }
      return state;

    case actionTypes.POST_ANSWER_INITIALIZER:
      return { ...state, isLoading: true };

    case actionTypes.POST_ANSWER_SUCCESS:
      return {
        title: '',
        questions: [],
        options: [],
        answers: [],
        isLoading: false,
        reqResponse: action.payload,
      };

    case actionTypes.POST_ANSWER_FAILURE:
      return {
        ...state,
        isLoading: false,
        reqResponse: JSON.parse(
          JSON.stringify(
            action.payload.error,
            Object.getOwnPropertyNames(action.payload.error)
          )
        ),
      };
    default:
      return state;
  }
};
