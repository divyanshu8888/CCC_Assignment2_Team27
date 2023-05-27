import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";

const handleClick = () => {
  // Perform any additional actions or logic before opening the link

  // Open the link
  window.open('https://drive.google.com/file/d/1Xx-5IF8EXvisST9LWdbIK0a_FgZt5eRl/view', '_blank');
};

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/home/",
                  state: {
                    title: "Home"
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/scenario1">Scenario 1</Link>
            </li>
            <li>
              <Link to="/scenario2">Scenario 2</Link>
            </li>
            <li>
              <Link to="/scenario3">Scenario 3</Link>
            </li>
            <li>
              <Link to="/scenario4">Scenario 4</Link>
            </li>
            <li>
            <a href="#" onClick={handleClick}>Download Report</a>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;
