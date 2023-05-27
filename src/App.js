import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "./Routes"
import "./App.css";
import { Link } from "react-router-dom";
import { RefContext } from "./lib/context"

function App() {

  const contactRef = useRef(null)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)

  const contactScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const homeScroll = () => homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="App">
      <div className="Nav">
        <Navbar collapseOnSelect expand="lg" fixed="top" className="NavBar">
          <Link to="/" onClick={() => homeScroll()}>
            <Navbar.Brand className="font-weight-bold text-muted">
              <h3 className="logo">
                A
              </h3>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" style={{ paddingRight: 50 }}>
            <Nav activeKey={window.location.pathname}>
              {/* <Nav.Link onClick={() => contactScroll()} className="effect" style={{ color: '#d7d7d7' }}>Connect</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <RefContext.Provider value={{ contactRef, homeRef, aboutRef, contactScroll, aboutScroll }}>
          <Routes />
        </RefContext.Provider>
      </div>
    </div>
  );
}

export default App;
