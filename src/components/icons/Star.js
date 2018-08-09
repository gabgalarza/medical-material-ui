import React from 'react';
import Grade from '@material-ui/icons/Grade';

const Star = (props) => {
  const { value, color } = props;
  let i = 1;
  const stars = [];

  for (i; i <= parseInt(value, 10); i++) {
    stars.push(i);
  }

  const starRow = stars.map((star, i) => <Grade key={i} className={color}/>);
  return starRow;
}

export default Star;
