import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SimpleCard from './Card';
import ContactForm from './ContactForm';
import { Reviews } from './data/Reviews';


function TabContainer({ children, dir }) {
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
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class FullWidthTabs extends React.Component {
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
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered
            fullWidth
          >
            <Tab label="Reviews" />
            <Tab label="About Us" />
            <Tab label="Services" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {Reviews.map((review, i) =>
              <SimpleCard key={i} name={review.name} rating={review.rating} review={review.review}/>
            )}
          </TabContainer>
          <TabContainer dir={theme.direction}>About Us</TabContainer>
          <TabContainer dir={theme.direction}>Services</TabContainer>
          <TabContainer dir={theme.direction}>
            <ContactForm/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
