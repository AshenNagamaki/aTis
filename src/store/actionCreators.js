import * as actionTypes from './actionTypes';
import { axiosInstance as axios } from '../utilities/axios-utilities';

export const addAnswerCreator = (qNum, oNum) => {
  return {
    type: actionTypes.ADD_ANSWER,
    questionNumber: qNum,
    optionNumber: oNum,
  };
};

export const postAnswerInitializer = () => ({
  type: actionTypes.POST_ANSWER_INITIALIZER,
});

export const postAnswerSuccess = (respData) => ({
  type: actionTypes.POST_ANSWER_SUCCESS,
  payload: { ...respData },
});

export const postAnswerFailure = (error) => ({
  type: actionTypes.POST_ANSWER_FAILURE,
  payload: { error },
});

export const postAnswerCreator = (answerData) => {
  return async (dispatch) => {
    dispatch(postAnswerInitializer());
    try {
      const reqResponse = await axios.post(
        '/answers.json',
        JSON.stringify(answerData)
      );
      dispatch(postAnswerSuccess(reqResponse));
    } catch (reqError) {
      dispatch(postAnswerFailure(reqError));
    }
  };
};
