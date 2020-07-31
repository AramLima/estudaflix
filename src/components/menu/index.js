import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/img/logo.png';
import {LogoImage, MenuWrapper, ButtonLink} from './style';
//import Button from '../Button';


//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={logo} alt="Estudaflix logo" />
            </Link>
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </ButtonLink>
            
        </MenuWrapper>

    );
}

export default Menu;