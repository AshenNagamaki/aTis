import React from "react";

import classes from "./Option.module.scss";

export const Option = ({ oNum, option }) => (
  <li className={classes.Option}>
    {String.fromCharCode(65 + oNum)} {option}
  </li>
);
