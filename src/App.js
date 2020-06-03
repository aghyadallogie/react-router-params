import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PostList from './views/PostList';
import PostDetails from './views/PostDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/post/:userID" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default App;
