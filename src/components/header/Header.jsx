"use client";

import React, { useState } from "react";
import "./Header.css";
import { UilEstate, UilUser, UilFile, UilBriefcaseAlt, UilScenery, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'


export default function Header(){
    /*mudar menu*/
    const[Toggle,showMenu] = useState(false);

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
            Luna
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link"> Home
                        <i className="nav__icon">
                            <UilEstate /> 
                        </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link"> About
                        <i className="nav__icon">
                            <UilUser /> 
                        </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link"> Skills
                            <i className="nav__icon">
                                <UilFile /> 
                            </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link"> Services
                            <i className="nav__icon">
                                <UilBriefcaseAlt /> 
                            </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link"> Portfolio
                            <i className="nav__icon">
                                <UilScenery /> 
                            </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link"> Contact
                            <i className="nav__icon">
                                <UilMessage /> 
                            </i>
                        </a>
                    </li>
                </ul>
                <div className="nav__close" onClick = {()=>showMenu(!Toggle)}>
                    <UilTimes />
                </div>
            </div>
            <div className="nav__toggle " onClick = {()=>showMenu(!Toggle)}>
                <UilApps />
            </div>
        </nav>
    </header>
    )
}

