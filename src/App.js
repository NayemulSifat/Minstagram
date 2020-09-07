import React from 'react';
import './App.css';
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from './components/postDetails/PostDetails';
import Failed from './components/failed/Failed';


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/postdetails/:id">
            <PostDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Failed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
