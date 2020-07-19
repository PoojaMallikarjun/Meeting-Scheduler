import React from "react";
import "./App.css";
import Meetings from "./components/Meetings/Meetings";
import NewMeeting from "./components/NewMeeting/NewMeeting";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Meetings} />
        <Route exact path="/newmeeting" component={NewMeeting} />
      </Switch>
    </div>
  );
}

export default App;
