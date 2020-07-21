import axios from 'axios';

import * as actionTypes from './actionTypes';
import { axiosInstance } from '../utilities/axios-utilities';

const reqCancelNotification =
  '[CANCELLATION PROCESS] Operation canceled due to the API limits.';

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
  payload: { ...error },
});

export const postAnswerCreator = (title, answerData) => {
  let source;
  return async (dispatch) => {
    dispatch(postAnswerInitializer());
    if (source) {
      source.cancel(reqCancelNotification);
    }
    const { CancelToken } = axios;
    source = CancelToken.source();
    try {
      const reqResponse = await axiosInstance.post(
        `/gathered/${title}/answers.json`,
        JSON.stringify(answerData),
        { cancelToken: source.token }
      );
      dispatch(postAnswerSuccess(reqResponse));
    } catch (reqError) {
      dispatch(postAnswerFailure(reqError));
    }
  };
};
