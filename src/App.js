import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import User from './Component/User';

function App() {
  return (
    <div >
     <Router>
    <Switch>
    <Route exact path='/Login' component={Login}></Route>
    <Route exact path='/Register' component={Register}></Route>
    <Route exact path='/User' component={User}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
