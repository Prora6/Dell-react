import React from 'react'
import'./style.scss'
import'../images/folders.png'

class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__content">
                    <div className="banner__content-title wrap">
                        <h1 className="wrap__title">Как управлять людьми</h1>
                        <h3 className="wrap__description">и не сойти с ума в 2021</h3>             
                    </div>
                    <div className="banner__content-img img">
                        <img src="" alt="" className="img__man"/>
                        <img src="" alt="" className="img__message-hi"/>
                        <img src="" alt="" className="img__message-early"/>
                        <img src="" alt="" className="img__message-cash"/>
                        <img src="" alt="" className="img__message-work"/>
                        <img src="" alt="" className="img__message-thanks"/>
                    </div>
                    <img src="" alt="" className="banner__content-folders"/>
                    <img src="" alt="" className="banner__content-clock"/>
                    <img src="" alt="" className="banner__content-cursor"/>
                    <img src="" alt="" className="banner__content-picture"/>
                </div>
            </section>
        )
    }
}

  export default Banner;