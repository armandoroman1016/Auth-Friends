import React from 'react';
import LoginFormik from './components/LoginForm'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <LoginFormik/>
    </div>
  );
}

export default App;
