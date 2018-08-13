import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Top, Bottom } from './data/Hero.js';
import heroStyles from './styles/Hero';

const Hero = (props) => {
  const { classes } = props;
  const topUppercase = Top.primary.toUpperCase();

  return (
    //TODO:Fix overlay issue
    <div className={classes.hero}>
      <div className={classes.top}>
        <Typography
          className={classes.topFont}
          variant="display3">{topUppercase}</Typography>
        <Typography variant="display1">{Top.secondary}</Typography>
      </div>
      <div className={classes.bottom}>
        <Typography
          className={classes.bottomFont}
          variant="headline">{Bottom.primary}</Typography>
        <Typography
          className={classes.bottomSecondary}
          variant="body1">{Bottom.secondary}</Typography>
      </div>
    </div>
  );
};

export default withStyles(heroStyles, { withTheme: true })(Hero);
