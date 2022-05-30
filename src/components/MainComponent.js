import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Gallery from './GalleryComponent';
import { PICS } from '../shared/pictures'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: PICS,
            selectedPicture: null,
        };
    }
    onDishSelect(picId) {
        this.setState({ selectedPicture: picId })
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <nav>
                            <ul>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/menu' component={() => <Gallery pics={this.state.pics}
                                selectedPicture={this.state.selectedPicture} onClick={(picId) => this.onDishSelect(picId)} />} />
                            <Redirect to="/home" />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main