import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Nav
} from "react-bootstrap";

/**
 *  NavBar Component
 */
export default class NavBarComponent extends Component {

  render() {
    return (

      <div className='text-topnav'>
        
        <Navbar className='bg-topnav' expand='lg' bg='light'>
          <NavLink to='/'>
            <Navbar.Brand className='logo'>Prova Prática</Navbar.Brand>
          </NavLink>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              
              <div className='mx-lg-2'>
                <NavLink to='/Questions'>Questões da Prova</NavLink>
              </div>

              <div className='mx-lg-5'>
                <NavLink to='/About'>Sobre a Prova</NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}
