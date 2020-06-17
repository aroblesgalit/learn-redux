import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// STORE -> GLOBALIZED STATE -- holds all data/state for your app 

// ACTION INCREMENT -- name that describes what you want to do

// REDUCER -- describes how your action (name) transforms your current state into a new state

// DISPATCH -- executes the action (name)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
