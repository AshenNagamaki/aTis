import React from 'react';

import { Autocomplete } from '../UI/Autocomplete/Autocomplete';

import classes from './Main.module.scss';

export const Main = () => (
  <section className={classes.Main}>
    <h1 className={classes.Title}>Just start typing ...</h1>
    <Autocomplete label="Anonymous Testing Intelligent Service" options={[]} />
  </section>
);
