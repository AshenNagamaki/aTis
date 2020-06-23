import * as actionTypes from './actionTypes';

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

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answerData),
    };

    try {
      const requestResponse = await fetch(
        'https://private-online-testing-service.firebaseio.com/testAnswers.json',
        config
      );
      const responseJSON = await requestResponse.json();
      dispatch(postAnswerSuccess(responseJSON));
    } catch (error) {
      dispatch(postAnswerFailure(error));
    }
  };
};
