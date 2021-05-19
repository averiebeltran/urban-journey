import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../assets/css/portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import resumeData from '../resume-data';

class Portfolio extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <div className="portfolio">
                    <div className="portfolio-header">Check out my recent work.</div>
                    <div className="wrapper">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) => {
                                return (
                                    <div className="portfolio-item">
                                        <p>{item.title}</p>
                                        <img src={item.image} />
                                        <div className="item-links">
                                            <a href={item.url} target="_blank">Link to application</a>
                                            <a href={item.github} target="_blank">Github</a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Portfolio;