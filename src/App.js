import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import "./Contacts.css"
import Contacts from "./Contacts";
import ContactPage from "./ContactPage"
import Nav from "./Nav.js"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Nav}/>
          <Route path="/contact/:id" component={ContactPage}/>
        </div>
      </Router>
    )
  }
}

export default App