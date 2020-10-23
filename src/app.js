import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, RdvPage, TchatPage } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/rdv" component={RdvPage} />
        <Route path="/tchat" component={TchatPage} />
      </Switch>
    </Router>
  );
}

export default App;
