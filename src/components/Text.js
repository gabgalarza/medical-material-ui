import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const welcomeTitle = " Welcome To Royal Dental Care";
const welcomeText = "Thank you for visiting our page. We would like to warmly welcome you and invite you to take a tour of our " +
    "website where your questions and concerns may be answered. If you are looking for a dentist then STOP - your search" +
    " is over - we promise. Our entire team of dental experts is here to serve YOU. We promise to care for your dental " +
    "needs, but we know that our impact extends beyond fixing teeth. Our strive for excellence has been recognized by " +
    "our wonderful patients - just look at all their testimonials on Google. Convenience, excellent service, and " +
    "complete range of services are just the beginning. We believe that happiness is contagious so we make sure that " +
    "our patients are happy. Our promise is to respect you as an individual - the busy mother, the overworked father, " +
    "the anxious one, \"its been years since I saw a dentist\" one, and so many countless others - therefore we want " +
    "you to tell us our story so we can customize your dental need around your life.";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },


});

function Text(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={15}>
                <Typography variant="headline" component="h3">
                    {welcomeTitle}
                </Typography>
                <Typography component="p">
                    {welcomeText}
                </Typography>
                <div id="videoWrapper">
                    <iframe id="video" title="Never gonna give you up"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </Paper>
        </div>
    );
}

Text.prototype = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Text);
