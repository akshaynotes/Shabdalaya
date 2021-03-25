import React from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="">
          <Link to="/">
            <img
              src="https://www.shabdalaya.com/images/main-logo.png"
              alt="Shabdalaya"
            ></img>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/kadambari">Kadambari</NavDropdown.Item>
            <NavDropdown.Item href="/arogya">Aarogya</NavDropdown.Item>
            <NavDropdown.Item href="/somethingelse">
              something else
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
          <Nav.Link href="/authors">Authors</Nav.Link>
          <Nav.Link href="/publications">Publications</Nav.Link>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search for Books by Keywords"
              className="col-xs-3 mr-sm-2"
            />
          </Form>
        </Nav>

        <Nav className="navbar-right">
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
        </Nav>
        {/* <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul> */}
      </Navbar>
    </div>
  );
}

export default Header;

// TODO
// 1. Change the colour of Nav link
// 2. change color to red while hovering
// 3. increase the search box length
// 4. add sign up and sign in icon using material-ui
