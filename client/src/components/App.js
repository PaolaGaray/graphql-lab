
import React, { useContext, useReducer } from 'react';

import Context from '../context';
import reducer from '../reducer';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import { Switch, Route } from 'react-router-dom';


function App() {

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({state });

  return (
    <Context.Provider value={{ state, dispatch }}>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Splash} />
       </Switch>
    </Context.Provider>
  );
}

export default App;
