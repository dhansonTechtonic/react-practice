import React from 'react';
import './App.css';
import DisplayPage from './Components/DisplayPage'
import InfoPage from './Components/InfoPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={DisplayPage}/>
      <Route path='/homeworld/' component={InfoPage} />
    </Router>
  );
}

export default App;
