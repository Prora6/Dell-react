import React from 'react'
import'./style.scss'
import Logo from '../svgIcon/Logo.jsx'
import Twitter from '../svgIcon/Twitter.jsx'
import Vkontakte from '../svgIcon/Vkontakte.jsx'
import Facebook from '../svgIcon/Facebook.jsx'
import Partner from '../svgIcon/Partner.jsx'


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <a href="header__logo-link link">
                        <Logo className="link__img"/>
                    </a>
                </div>
                <div className="header__social">
                    <a href="" className="header__social-link link">
                        <Twitter  className="link__img"/>
                    </a>
                    <a href="" className="header__social-link link">
                        <Vkontakte className="link__img"/>
                    </a>
                    <a href="" className="header__social-link link">
                        <Facebook className="link__img"/>
                    </a>
                </div>
                <div className="header__partner">
                    <a href="header__partner-link link">
                        <Partner className="link__img"/>
                    </a>
                </div>
            </header>
        )
    }
}

  export default Header;