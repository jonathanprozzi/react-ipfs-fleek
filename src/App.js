import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className='App-container'>
        <nav>
          <ul>
            <li>
              <Link className='App-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='App-link' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='App-link' to='/users'>
                Users
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className='App-title'>Home</h2>;
}

function About() {
  return <h2 className='App-title'>About</h2>;
}

function Users() {
  return <h2 className='App-title'>Users</h2>;
}
