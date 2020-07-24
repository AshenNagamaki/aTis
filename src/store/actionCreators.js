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

export const initializeRequest = () => ({
  type: actionTypes.INITIALIZE_REQUEST,
});

export const postAnswerRequest = (respData) => ({
  type: actionTypes.POST_ANSWER_REQUEST,
  payload: respData,
});

export const getTestRequest = (respData) => ({
  type: actionTypes.GET_TEST_REQUEST,
  payload: respData,
});

export const getTopicsRequest = (respData) => ({
  type: actionTypes.GET_TOPICS_REQUEST,
  payload: respData,
});

export const requestFailure = (error) => ({
  type: actionTypes.REQUEST_FAILURE,
  payload: error,
});

export const clearStateCreator = () => ({
  type: actionTypes.CLEAR_STATE,
});

export const requestCreator = (type, ...config) => {
  let source;

  return async (dispatch) => {
    dispatch(initializeRequest());

    if (source) {
      source.cancel(reqCancelNotification);
    }
    const { CancelToken } = axios;
    source = CancelToken.source();

    let reqResponse;

    try {
      if (type === 'POST_ANSWER') {
        const [title, answerData] = config;

        reqResponse = await axiosInstance.post(
          `/gathered/${title}/answers.json`,
          JSON.stringify(answerData),
          { cancelToken: source.token }
        );

        dispatch(postAnswerRequest(reqResponse.data));
      } else if (type === 'GET_TEST') {
        const topic = config;

        reqResponse = await axiosInstance.get(`/test/${topic}.json`, {
          cancelToken: source.token,
        });

        dispatch(getTestRequest(reqResponse.data));
      } else if (type === 'GET_TOPICS') {
        reqResponse = await axiosInstance.get(`/topics.json`, {
          cancelToken: source.token,
        });

        dispatch(getTopicsRequest(reqResponse.data));
      }
    } catch (reqError) {
      dispatch(requestFailure(reqError));
    }
  };
};
