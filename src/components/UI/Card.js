import React from 'react';

// Style
import classes from './Card.module.css';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
