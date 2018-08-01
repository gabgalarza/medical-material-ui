import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Star from './icons/Star';

const styles = {

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    fontStyle: 'italic'
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, name, rating, review } = props;

  return (
    <div className="card-container">
      <Card className="card">
        <CardContent className="card-height">
          <Typography className={classes.title} color="textSecondary">
            {name}
          </Typography>
          <Typography variant="headline" component="h2">
            <Star value={rating} />
          </Typography>
          <Typography component="p">
            {review}
          </Typography>
        </CardContent>
        <CardActions>
          {/* TODO: add href to Button - lead to Reviews page */}
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
