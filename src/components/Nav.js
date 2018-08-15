import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//import SimpleCard from './Card';
//import { Reviews } from './data/Reviews';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const TabContainer = ({ children, dir }) => {
  const styles = {
    padding: '24px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };
  return (
    <Typography component="div" dir={dir} style={styles}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  swipeContainer: {
    backgroundColor: theme.palette.primary.second,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginBtn: {
    float: 'right',
  },
});

class Nav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className="root">
        <AppBar className={classes.appBar} position="sticky" color="primary">
          <IconButton className={classes.menuIcon} color="secondary" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered
            >
            <Tab label="About Us" />
            <Tab label="Reviews" />
            <Tab label="Contact" />
          </Tabs>
          {/*<Button className={classes.loginBtn} color="inherit">Login</Button>*/}
        </AppBar>
        {/*<SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          className={classes.swipeContainer}
        >
          <TabContainer dir={theme.direction}>About Us</TabContainer>
          <TabContainer dir={theme.direction}>
            {Reviews.map((review, i) =>
              <SimpleCard key={i} name={review.name} rating={review.rating} review={review.review}/>
            )}
          </TabContainer>
          <TabContainer dir={theme.direction}>Contact</TabContainer>
        </SwipeableViews>*/}
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);
