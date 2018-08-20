import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { DatePicker } from 'material-ui-pickers';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    card: {
        margin: '0 auto',
    },
    formContainer: {
        width: '40%',
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class ContactForm extends Component {

    state = {
        selectedDate: '1980-01-02T00:00:00.000Z',
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    }

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;

        return(
            <div className={classes.formContainer}>
                <form className={classes.container} >
                <Card className={classes.card} >
                    <h1>
                        <TextField
                                id="firstName"
                                label="First name"
                                className={classes.textField}
                                margin="normal"
                            />
                        <TextField
                            id="lastName"
                            label="Last name"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            className={classes.textField}
                            margin="normal"
                        />
                    </h1>
                <h2>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Fragment>
                                <div className="picker">
                                    <DatePicker
                                        label="Date of Birth"
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                        animateYearScrolling={false}
                                        openToYearSelection={true}
                                        format="DD/MM/YYYY"
                                    />
                                </div>
                            </Fragment>
                        </MuiPickersUtilsProvider>
                        <TextField
                            id="symptomps"
                            label="Describe Symptomps"
                            className={classes.textField}
                            margin="normal"
                            multiline
                        />
                    </h2>
                        <div>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Submit
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Cancel
                            </Button>
                        </div>
                </Card>
                </form>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ContactForm);