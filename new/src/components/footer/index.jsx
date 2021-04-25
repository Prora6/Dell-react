import React from 'react'
import './style.scss'


class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer__content">
                    <a href="" className="footer__content-link">
                        Лайфхакер
                    </a>
                    <a href="" className="footer__content-link">
                        Dell 
                    </a>
                    <p className="footer__content-text">© 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer;