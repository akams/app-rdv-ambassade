import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GlobalStyles } from './global-styles';
import App from './app';
import Firebase from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
