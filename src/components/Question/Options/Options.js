import React from "react";

import { Option } from "./Option/Option";

import classes from "./Options.module.scss";

export const Options = props => {
  const optionsData = props.options.map((option, index) => (
    <Option
      key={index}
      qNum={props.qNum}
      oNum={index}
      option={option}
      answersState={props.answersState}
      onAddAnswer={props.onAddAnswer}
    />
  ));
  return <ol className={classes.Options}>{optionsData}</ol>;
};
