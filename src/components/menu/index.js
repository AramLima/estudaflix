import React from 'react';
import logo from '../../assests/img/logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Estudaflix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
            
        </nav>

    );
}

export default Menu;