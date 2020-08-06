import './App.css';

import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import {connect} from 'react-redux';
import { auth } from './firebase';

let getData = (store) => {
  return {
    store
  }
}

let getFunction = (dispatch) => {
  return {
    setUser: dispatch
  }
}
export default connect(getData, getFunction)(class App extends Component {
  componentDidMount = () => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        let action = {
          type: "SET_USER",
          payload: authUser.email
        }
        this.props.setUser(action)
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>   
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
})
