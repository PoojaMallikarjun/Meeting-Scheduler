import React, { Component } from "react";
import Header from "../Header";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Typography, TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./styles";

class NewMeeting extends Component {
  constructor() {
    super();
    this.state = {
      meetingDate: null,
      startTime: null,
      endTime: null,
      description: "",
    };
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // isDateValid = () => {
  //   var date = new Date(this.state.meetingDate);
  //   var currentDate = new Date();
  //   if (date < currentDate) return false;
  //   return true;
  // };

  checkSlot = () => {
    let meetingList = this.props.location.state.data;
    let cSTime = parseFloat(this.state.startTime.split(":").join("."));
    let cEnd = parseFloat(this.state.endTime.split(":").join("."));

    for (let i of meetingList) {
      let Tstart = parseFloat(i.start_time.split(":").join("."));
      let Tend = parseFloat(i.end_time.split(":").join("."));
      if (cSTime >= Tstart && cSTime < Tend) {
        return false;
      }
      if (cEnd > Tstart && cEnd < Tend) {
        return false;
      }
      if (cSTime < Tstart && cEnd > Tend) {
        return false;
      }
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let res = this.checkSlot();
    if (res === true) {
      alert("Slot Available");
    } else {
      alert("Slot not availablee");
    }
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <div>
        <Header heading="New Meeting" />

        <main className={classes.main}>
          <Paper className={classes.paper}>
            {/* <p>{JSON.stringify(this.props.location.state.currentDate)}</p> */}
            <form
              className={classes.form}
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <br />
              <FormControl required margin="normal">
                <TextField
                  required
                  id="time"
                  label="Start time"
                  type="time"
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="startTime"
                  onChange={this.handleInput.bind(this)}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </FormControl>
              &nbsp;
              <FormControl required margin="normal">
                <TextField
                  required
                  id="time"
                  label="End Time"
                  type="time"
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  name="endTime"
                  onChange={this.handleInput.bind(this)}
                />
              </FormControl>
              <br />
              <TextareaAutosize
                className={classes.textArea}
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Description"
                onChange={this.handleInput.bind(this)}
              ></TextareaAutosize>
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Save
              </Button>
            </form>
            {this.state.error ? (
              <Typography
                className={classes.errorText}
                component="h6"
                variant="h6"
              >
                {this.state.error}
              </Typography>
            ) : null}
          </Paper>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(NewMeeting);
