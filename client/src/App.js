import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUserInfo from "./components/AddUserInfo";
import UserDetails from "./components/UserDetails";
import NavigationBar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/add-info" exact component={AddUserInfo} />
          <Route path="/get-info/:email" exact component={UserDetails} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
