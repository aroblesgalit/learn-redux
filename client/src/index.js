import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);


// // STORE -> GLOBALIZED STATE -- holds all data/state for your app 

// // ACTION INCREMENT -- name that describes what you want to do
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }
// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// // REDUCER -- describes how your action (name) transforms your current state into a new state
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH -- executes the action (name)
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
