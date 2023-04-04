import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/images/Marvelbackg.jpg';
import logo from '../../assets/images/marvel-logo-personnages.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">The Marvel Xperience</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="https://www.linkedin.com/in/yannickcherfia">About me</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="https://devandart.fr/">Visit my website</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="https://developer.marvel.com/">Thanks to the Marvel Developer Portal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
