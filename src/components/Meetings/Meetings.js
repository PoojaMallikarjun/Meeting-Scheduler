import React, { Component } from "react";
import { Button, withStyles } from "@material-ui/core";
import DatePicker from "react-datepicker";
import Header from "../Header";
import { Link } from "react-router-dom";
import styles from "./styles";
import "react-datepicker/dist/react-datepicker.css";

class Meeting extends Component {
  state = {
    meetings: [],
    startDate: new Date(),
  };

  fetchData() {
    let d = this.state.startDate;
    let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    let url =
      "https://fathomless-shelf-5846.herokuapp.com/api/schedule?date=" + date;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ meetings: data });
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.startDate !== this.state.startDate) {
      this.fetchData();
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  ascendingSort = (prop) => {
    console.log(prop);
    return function (a, b) {
      console.log(a.start_time, b.start_time);
      var one = parseFloat(a[prop].split(":").join("."));
      var two = parseFloat(b[prop].split(":").join("."));
      if (one > two) {
        return 1;
      } else if (one < two) {
        return -1;
      }
      return 0;
    };
  };

  checkDisable() {
    if (this.state.startDate < new Date()) {
      return false;
    }
  }

  render() {
    const { classes } = this.props;
    let mon = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let d = this.state.startDate;
    let date = d.getDate() + " " + mon[d.getMonth()] + " " + d.getFullYear();
    const sortedList = this.state.meetings.sort(
      this.ascendingSort("start_time")
    );

    console.log(this.state.startDate);
    console.log(new Date());

    let noMeeting;
    if (sortedList.length === 0) {
      noMeeting = <p>No Meetings today</p>;
    }

    return (
      <div style={{ alignItems: "center" }}>
        <Header heading="Meetings" />
        <h1 style={{ color: "#3151b5" }}>{date}</h1>
        <br />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className={classes.datePicker}
        />
        <br />
        {noMeeting}
        {sortedList.map((item, index) => (
          <div key={index}>
            <div className={classes.list}>
              <p className={classes.listItem}>
                <div className={classes.time}>
                  {item.start_time} - {item.end_time}
                </div>

                <span>
                  Meeting with{" "}
                  {item.participants.map((name) => (
                    <>
                      {name}
                      {","}{" "}
                    </>
                  ))}{" "}
                  for {item.description}
                </span>
              </p>
            </div>
          </div>
        ))}

        {this.state.startDate.setHours(0, 0, 0, 0) <
        new Date().setHours(0, 0, 0, 0) ? null : (
          <Link
            to={{
              pathname: `/newmeeting`,
              state: {
                data: this.state.meetings,
                currentDate: this.state.startDate,
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: "10px", textDecoration: "none" }}
            >
              {" "}
              ADD MEETING
            </Button>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Meeting);
