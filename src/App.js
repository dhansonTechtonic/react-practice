import React from 'react';
import './App.css';
import DisplayPage from './Components/DisplayPage'
import WorldPage from './Components/WorldPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={DisplayPage}/>
      <Route path='/homeworld/' component={WorldPage} />
    </Router>
  );
}

export default App;
