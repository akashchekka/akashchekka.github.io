import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink"
import Routes from "./Routes"
import "./App.css";
import { Link } from "react-router-dom";
import { RefContext } from "./lib/context"

function App() {

  const techRef = useRef(null)

  const techScroll = () => techRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

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
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" style={{paddingRight: 50}}>
            <Nav activeKey={window.location.pathname}>
                <NavLink onClick={techScroll} className="effect" style={{color: '#d7d7d7'}}>Tech</NavLink>
                <NavLink className="effect" style={{color: '#d7d7d7'}}>Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="routes">
        <RefContext.Provider value={{techRef}}>
          <Routes />
        </RefContext.Provider>
      </div>
    </div>
  );
}

export default App;
