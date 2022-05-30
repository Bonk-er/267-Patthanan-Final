import React, { Component } from 'react';
import { AccordionItem, AccordionHeader, AccordionBody, UncontrolledAccordion } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center col-12">
                            <div className="px-2">
                                <img src='assets/images/me.jpg' className='profilepic'></img>
                            </div>
                            <div className="column py-5">
                                <h3>"People say nothing is impossible, but I do nothing every day."</h3><br />
                                <h5>Name : Dwayne "The Wok" Johnson</h5><br />
                                <UncontrolledAccordion>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1"><h5>Educational Background:</h5></AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <div className="d-flex row">
                                                <b className="px-4 py-2">University of Miami</b>
                                                <b className="px-4 py-2"> President William McKinley High School in Honolulu, Hawaii</b>
                                                <b className="px-4 py-2">Glencliff High School</b>
                                                <b className="px-4 py-2">McGavock High School in Nashville, Tennessee</b>
                                                <b className="px-4 py-2">Freedom High School in Bethlehem, Pennsylvania</b>
                                                <b className="px-4 py-2">Montclaire Elementary School in Charlotte, North Carolina</b>
                                            </div>
                                        </AccordionBody>
                                    </AccordionItem>
                                </UncontrolledAccordion>
                                <br />
                                <UncontrolledAccordion>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2"><h5>Favorite Subjects</h5></AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <div className="d-flex row">
                                                <p><b className="ps-4 py-2">Physical Education</b> -> Want to be healthy and strong</p>
                                                <p><b className="ps-4 py-2">Mathematics</b> -> Like to calculate</p>
                                                <p><b className="ps-4 py-2">Computer Science</b> -> Love coding</p>
                                            </div>
                                        </AccordionBody>
                                    </AccordionItem>
                                </UncontrolledAccordion>
                                <br />
                                <UncontrolledAccordion>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3"><h5>Favorite Movies</h5></AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <div className="d-flex row">
                                                <p><b className="ps-4 py-2">Jumanji: Welcome to the Jungle</b> -> Like the concept of boardgame mixed with reality</p>
                                                <p><b className="ps-4 py-2">Fast & Furious Presents: Hobbs & Shaw</b> -> Action to the maximum!</p>
                                                <p><b className="ps-4 py-2">Moana</b> -> Great Animations and Graphics</p>
                                            </div>
                                        </AccordionBody>
                                    </AccordionItem>
                                </UncontrolledAccordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;