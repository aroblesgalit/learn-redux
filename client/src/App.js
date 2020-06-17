import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin, signout } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {
        isLogged ?
        <button className="login" onClick={() => dispatch(signout())}>Log out</button> :
        <button className="login" onClick={() => dispatch(signin())}>Log in</button>
      }
      <h1>Counter {counter}</h1>
      <div>
        <button className="counter" onClick={() => dispatch(increment(5))}>+</button>
        <button className="counter" onClick={() => dispatch(decrement(5))}>-</button>
      </div>
      {
        isLogged ?
          <h3>Valuable information I'm seeing because I'm logged in.</h3> :
          <p>You are not logged in.</p>
      }

    </div>
  );
}

export default App;
