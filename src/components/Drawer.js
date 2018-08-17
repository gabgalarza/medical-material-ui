import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  paper: {
    width: '275px',
    padding: '0 1rem',
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text
  }
});

const MobileMenu = (props) => {

  const menuList = (
    <div>
      <Typography variant="headline">Book Appointment</Typography>
      <Typography variant="headline">Services</Typography>
      <Typography variant="headline">Profile</Typography>
      <Typography variant="headline">Contact Us</Typography>
      <Typography variant="headline">Login</Typography>
    </div>
  );

  return (
    <div>
      <Drawer
        open={props.open}
        onClose={props.closed}
        PaperProps={{
          classes: {
            root: props.classes.paper
          }
        }}>
         {menuList}
      </Drawer>
    </div>
  );
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MobileMenu);
