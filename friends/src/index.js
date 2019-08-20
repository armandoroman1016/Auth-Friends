import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleWare, compose} from 'redux'
import logger from 'logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { red } from 'ansi-colors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_CHROME__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleWare(thunk, logger)))


ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

