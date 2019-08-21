import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
//redux
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_CHROME__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)))


ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

