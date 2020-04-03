import React from "react";

import { Option } from "./Option/Option";

import classes from "./Options.module.scss";

export const Options = ({ options }) => {
  const optionsData = options.map((option, index) => (
    <Option key={index} oNum={index} option={option} />
  ));
  return <ol className={classes.Options}>{optionsData}</ol>;
};
