
import React from 'react';

import Home from './Home';
import Splash from '../pages/Splash';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Splash} />
       </Switch>
    </div>
  );
}

export default App;
