import * as actionTypes from "./actionTypes";

export const addAnswerCreator = (qNum, oNum) => {
  return {
    type: actionTypes.ADD_ANSWER,
    questionNumber: qNum,
    optionNumber: oNum
  };
};
