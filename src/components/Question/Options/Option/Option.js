import React from "react";

import classes from "./Option.module.scss";

export const Option = props => {
  const literalOpt = String.fromCharCode(65 + props.oNum);
  const activeClasses =
    props.answersState[props.qNum] === literalOpt
      ? `${classes.Option} ${classes.Active}`
      : classes.Option;
  return (
    <li
      className={activeClasses}
      onClick={() => props.onAddAnswer(props.qNum, literalOpt)}
    >
      {literalOpt} {props.option}
    </li>
  );
};
