import React from 'react';
import PDF from '../assets/images/resume.pdf';

const Nav = () => (
    <nav>
        <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href={PDF} target="_blank">Resume</a></li>
        </ul>
    </nav>
);

export default Nav;