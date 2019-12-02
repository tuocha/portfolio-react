import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{height: "100vh"}}>

        <nav>
          <div class="nav-wrapper grey">
          <Link to="/" class="brand-logo center">Cody Ballard
          </Link>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/" className="item">Profile</Link></li>
              <li><Link to="/projects" className="item">Projects</Link></li>
              <li><Link to="/contact" className="item">Contact</Link></li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </div>
    </BrowserRouter>
  );
}

export default App;
