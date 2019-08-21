import React from 'react';
import LoginFormik from './components/LoginForm'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';
import SingleFriendView from './components/SingleFriendView';

function App() {
  return (
    <div className="App">
      <Route path = '/login' component = {LoginFormik}/>
      <PrivateRoute exact path = '/friends' component = {FriendsList}/>
      <PrivateRoute exact path = '/friend/:id' component = {SingleFriendView}/>
    </div>
  );
}

export default App;
