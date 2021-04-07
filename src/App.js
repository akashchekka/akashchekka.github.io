import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink"
import Routes from "./Routes"
import "./App.css";
import { useHistory, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar collapseOnSelect expand="lg" className="NavBar">
          <Link>
            <Navbar.Brand className="font-weight-bold text-muted">
              <h3 style={{color: '#d7d7d7', fontFamily: 'Alice'}}>
                A
              </h3>
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="justify-content-end NavPos">
            <Nav activeKey={window.location.pathname}>
                <NavLink className="effect" style={{color: '#d7d7d7'}}>About</NavLink>
                <NavLink className="effect" style={{color: '#d7d7d7'}}>Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="routes">
        <Routes />
      </div>
    </div>
  );
}

export default App;
