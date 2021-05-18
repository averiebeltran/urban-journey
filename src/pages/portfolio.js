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
                                        <img src={item.imgUrl} />
                                        <a href={item.url}>Link to application</a>
                                        <a href={item.github}>
                                            <FontAwesomeIcon icon={faGithub} className="icon" size='2x' />
                                        </a>
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