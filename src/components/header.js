import React from 'react';
import Nav from './nav';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const displayMenu = () => setShowMenu(!showMenu);

    return (
        <header className="header">
            <div className="nav">
                <a href="/"><h1>Averie Beltran</h1></a>
                <FontAwesomeIcon
                    icon={faBars}
                    className="menu"
                    size='2x'
                    onClick={displayMenu}
                    aria-hidden="true"
                />
                <div className="desktop-nav">
                    <Nav />
                </div>
            </div>
            { showMenu
                ? <div className="mobile-nav"><Nav /></div>
                : null
            }
        </header>
    );
};

export default Header;