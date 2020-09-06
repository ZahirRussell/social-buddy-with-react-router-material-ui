import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>       
      </div>
    </Router>
  );
}

export default App;
