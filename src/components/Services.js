import React from 'react';
import { ServicesData } from './data/ServicesData'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    display: 'flex',
    overflow: 'scroll'
  },
  card: {
    flex: '1 0 40%',
    margin: '0 10px 10px'
  },
  content: {
    padding: '10px'
  },
  media: {
    height: '15vh'
  }
};

const Services = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
    {ServicesData.map((service, idx) => (
        <Card className={classes.card} key={idx}>
          <CardMedia
            className={classes.media}
            image={service.img} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="subheading">
              {service.name}
            </Typography>
            <Typography component="p">
              {service.content}
            </Typography>
          </CardContent>
        </Card>
      ))
    }
    </div>
  );
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
