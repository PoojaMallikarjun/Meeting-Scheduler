import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            style={{ color: "black", marginLeft: "150px", fontWeight: "400" }}
          >
            Vector Agency / {this.props.heading}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
