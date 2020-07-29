import { initialState } from './initialState';
import * as actionTypes from './actionTypes';
import { parseError } from '../utilities/utilities';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWER: {
      const updatedAnswers = [...state.answers];
      updatedAnswers[action.questionNumber] = action.optionNumber;
      return { ...state, answers: updatedAnswers };
    }

    case actionTypes.INITIALIZE_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_TOPICS_REQUEST:
      return {
        ...state,
        availableTopics: action.payload,
        isLoading: false,
        reqResponse: { reqFailed: false },
      };

    case actionTypes.GET_TEST_REQUEST:
      return {
        ...state,
        test: action.payload,
        isLoading: false,
        reqResponse: { reqFailed: false },
      };

    case actionTypes.POST_ANSWER_REQUEST:
      return {
        ...state,
        test: {},
        answers: [],
        isLoading: false,
        reqResponse: { ...action.payload, reqFailed: false },
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        test: {},
        answers: [],
        isLoading: false,
        reqResponse: {
          ...parseError(action.payload),
          reqFailed: true,
        },
      };

    case actionTypes.CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
