import axios from 'axios';

import * as actionTypes from './actionTypes';
import { axiosInstance } from '../utilities/axios-utilities';

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
  let source;
  return async (dispatch) => {
    dispatch(postAnswerInitializer());
    if (source) {
      source.cancel(
        '[CANCELLATION PROCESS] Operation canceled due to the API limits.'
      );
    }
    const { CancelToken } = axios;
    source = CancelToken.source();
    try {
      const reqResponse = await axiosInstance.post(
        '/answers.json',
        JSON.stringify(answerData),
        { cancelToken: source.token }
      );
      dispatch(postAnswerSuccess(reqResponse));
    } catch (reqError) {
      dispatch(postAnswerFailure(reqError));
    } finally {
      source.cancel(
        '[CANCELLATION PROCESS] Operation canceled due to the API limits.'
      );
    }
  };
};
