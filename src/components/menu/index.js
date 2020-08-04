import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/img/logo.png';
import { LogoImage } from './style.js';
import { MenuWrapper } from './style.js';
import Button from '../Button';


function Menu(){
    return (
     <MenuWrapper className="Menu">
        <Link to="/">
            <LogoImage src={logo} alt="Estudaflix logo" />
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo video
        </Button>
     </MenuWrapper>

    );
}

export default Menu;