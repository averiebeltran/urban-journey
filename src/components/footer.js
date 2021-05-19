import React from 'react';
import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/averiebeltran" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" size='2x' /></a>
            <a href="https://www.linkedin.com/in/averie-beltran-02a48b212/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size='2x' /></a>
        </footer>
    );
};

export default Footer;