import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Acceuil from "./Pages/Acceuil"

import './App.css';

class App extends Component {

  render () {

    const pages = (
      <Switch>
        <Route exact path="/" component={Acceuil}/>
      </Switch>
    )

  return (
    <div className="App">
      <Router>
        {pages}
      </Router>
    </div>
  );
}
}

export default App;
