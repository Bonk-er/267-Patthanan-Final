import React, { Component } from 'react';
import {
    Nav, NavbarText,
    Navbar, NavbarBrand,
    NavItem, NavbarToggler,
    NavLink, Collapse,
    UncontrolledDropdown,
    DropdownItem, DropdownMenu, DropdownToggle,
    Button, Form, FormGroup, Label, Input, Modal
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar
                    style={{ position: "sticky" }}

                    expand="sm"
                    fixed={'top'}
                    className={'Navcolor position-sticky ps-0'}
                    light
                >
                    <NavbarBrand href="/" classname="p-5" alt='Blue Square'><img src='assets/images/logo.jpg' className="react-logo" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="https://github.com/Bonk-er/267-Patthanan-Final">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">
                                    About Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/menu">
                                    Photo Gallery
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>

                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}

export default Header;