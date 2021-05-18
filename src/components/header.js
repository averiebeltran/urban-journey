import React from 'react';
import Nav from './nav';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const displayMenu = () => setShowMenu(true);

    return (
        <header className="header">
            <h1>Averie Beltran</h1>
            <div className="mobile-nav">
                <FontAwesomeIcon icon={faBars} className="menu" size='2x' onClick={displayMenu} />
                { showMenu ? <Nav /> : null }
            </div>
        </header>
    );
};

export default Header;