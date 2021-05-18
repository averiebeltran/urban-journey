import React from 'react';
import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <FontAwesomeIcon icon={faGithub} className="icon" size='2x' />
            <FontAwesomeIcon icon={faLinkedin} className="icon" size='2x' />
        </footer>
    );
};

export default Footer;