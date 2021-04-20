import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src="" alt="logo"/>
                </div>
                <div className="header__social">
                    <a href="" className="header__social-link">
                        <img src="" alt="" className="tw"/>
                    </a>
                    <a href="" className="header__social-link">
                        <img src="" alt="" className="vk"/>
                    </a>
                    <a href="" className="header__social-link">
                        <img src="" alt="" className="fb"/>
                    </a>
                </div>
            </header>
        )
    }
}

  export default Header;