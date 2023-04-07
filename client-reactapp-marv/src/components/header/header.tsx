import React, { useRef, useEffect, RefObject } from 'react';

import { Link, useLocation } from 'react-router-dom';

//setting up responsive burger menu
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

import './header.scss';

import logo from '../../assets/images/marvel-logo-personnages.jpg';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Home2',
        path: '/home2'
    },
    {
        display: 'Dev&art',
        path: '/Dev&art'
    }
];


const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const { pathname } = useLocation();
    const headerRef: RefObject<HTMLDivElement> = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current?.classList.add('shrink');
            } else {
                headerRef.current?.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    if (isMobile)
    return (
      
      <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">The Marvel</Link>
                </div>
                <Menu right down styles={menuStyles}>
                    <ul className="header__nav">
                        {
                            headerNav.map((e, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`}>
                                    <Link to={e.path}>
                                        {e.display}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    
                </Menu>
            </div>
        </div>
      
    );

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">The Marvel Xperience</Link>
                    
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
               
            </div>
        </div>
    );
}

export default Header;
