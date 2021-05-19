import React, { Component } from 'react';
import Nav from '../components/nav';
import '../assets/css/home.css';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Averie Beltran</h1>
                <Nav />
            </div>
        );
    }
}

export default Home;

