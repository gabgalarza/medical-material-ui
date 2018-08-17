import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SimpleCard from './Card';
import { Reviews } from './data/Reviews';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grade from '@material-ui/icons/Grade';
import Event from '@material-ui/icons/Event';
import Chat from '@material-ui/icons/Chat';
import MobileMenu from './Drawer.js';


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

const styles = theme => ({
  swipeContainer: {
    backgroundColor: theme.palette.secondary.dark,
    height: 300,
    position: 'fixed',
    bottom: 0,
    display: 'none'
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'fixed',
    top: 'unset',
    bottom: 0
  },
  menuIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginBtn: {
    float: 'right',
  },
});

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isOpen: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
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
        <MobileMenu
          open={this.state.isOpen}
          closed={this.toggleDrawer('isOpen', false)} />
        <AppBar className={classes.appBar} color="primary">
          <IconButton
            onClick={this.toggleDrawer('isOpen', true)}
            className={classes.menuIcon}
            color="secondary"
            aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered
            >
            <Tab icon={<Event />} />
            <Tab icon={<Grade />} />
            <Tab icon={<AccountCircle />} />
            <Tab icon={<Chat />} />
          </Tabs>

          {/*<Button className={classes.loginBtn} color="inherit">Login</Button>*/}
        </AppBar>
        <SwipeableViews
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
        </SwipeableViews>
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);
