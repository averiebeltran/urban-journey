import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../assets/css/portfolio.css';

class Portfolio extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <div class="portfolio">
                    <div className="portfolio-header">Check out my recent work.</div>
                    
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Portfolio;