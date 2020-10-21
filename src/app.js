import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import RdvPage from './pages/rdv';
import TchatPage from './pages/tchat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rdv" component={RdvPage} />
        <Route path="/tchat" component={TchatPage} />
      </Switch>
    </Router>
  );
}

export default App;
