import React, { Component } from 'react';
import {
    Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button, Modal,
    DropdownItem, Nav, Navbar, NavLink, NavItem, Collapse, NavbarToggler, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavbarText
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-sm-12 col-md-6 offset-md-3">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <div className="container p-5">
                                <Form>
                                    <Label className="fs-2 fw-bold">Create an Account</Label>
                                    <FormGroup>
                                        <Label>
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />
                                        {' '}
                                        <Label Remember>
                                            Remember me
                                        </Label>
                                    </FormGroup>
                                    <Button className="btn-secondary">
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </Modal>
                    </div>
                </div>


                <div class="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h1 class="display-5 fw-bold">Blue Square</h1>
                                        <p class="col-md-12 fs-4">A platfrom that let you work online with other people from around the world!</p>
                                    </div>
                                    {/* <img height="120" src="./images/pic1.jpg"></img> */}
                                </div>
                                <br />
                                <br />
                                <br />
                                <div className="d-flex">
                                    <div classname="row">
                                        <p class="fs-4">Share or Help others today</p>
                                        <Button onClick={this.toggleModal}>Register</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    
                    <div className="container">
                        <div className="row align-items-start">
                        <div className="col-12 col-md m-1">
                                <Card>
                                    <CardImg src='assets/images/pic1.jpg' alt='meme' className='cardbanner'/>
                                    <CardBody>
                                        <CardTitle><h4>Tired of Working Alone?</h4></CardTitle>

                                        <CardText>Get help from anywhere from across the world through Blue Square platform</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md m-1">
                                <Card>
                                    <CardImg src='assets/images/newsbanner.jpg' alt='meme' className='cardbanner'/>
                                    <CardBody>
                                        <CardTitle><h4>US to review police response to Texas school shooting</h4></CardTitle>

                                        <CardText>The US Justice Department will investigate the police response to the mass shooting at a school in Uvalde, Texas, which killed 19 children and two teachers.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;