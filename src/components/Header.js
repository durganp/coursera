import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = (event) => {
    toggleModal();
    alert(
      "Username: " +
        username.value +
        "password: " +
        password.value +
        "Remember: " +
        remember.checked
    );
    event.preventDefault();
  };

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              alt="Ristorante Con Fusion"
              height="30"
              width="41"
            />
          </NavbarBrand>
          <Collapse navbar isOpen={isNavOpen}>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in lg"></span>Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <Jumbotron>
        <div className="container ">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience . Our lipsmacking creations will tickle
                your culinary sences!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => setUsername(input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => setPassword(input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => setRemember(input)}
                />
                Remember Me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" className="bg-primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Header;
