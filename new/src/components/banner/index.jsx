import React from 'react'
import'./style.scss'
import Folders from'../../images/folders.png'
import Clock from '../../images/Clock.png'
import Cursor from '../../images/cursor.png'
import Picture from '../../images/picture.jpg'
import Man from '../../images/man.png'
import Hi from '../../images/hi.png'
import Early from '../../images/early.png'
import Cash from '../../images/Cash.png'
import Work from '../../images/Work.png'
import Thanks  from '../../images/thanks.png'


class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__content">
                    <div className="banner__content-title wrap">
                        <h1 className="wrap__title">КАК УПРАВЛЯТЬ ЛЮДЬМИ</h1>
                        <h3 className="wrap__description">и не сойти с ума в 2021</h3>             
                    </div>
                    <div className="banner__content-img img">
                        <img src={Man} alt="" className="img__man"/>
                        <img src={Hi} alt="" className="img__hi"/>
                        <img src={Early} alt="" className="img__early"/>
                        <img src={Cash} alt="" className="img__cash"/>
                        <img src={Work} alt="" className="img__work"/>
                        <img src={Thanks} alt="" className="img__thanks"/>
                    </div>
                    <img src={Folders} alt="Folders" className="banner__content-folders"/>
                    <img src={Clock} alt="Clock" className="banner__content-clock"/>
                    <img src={Cursor} alt="Cursor" className="banner__content-cursor"/>
                    <img src={Picture} alt="Picture" className="banner__content-picture"/>
                </div>
            </section>
        )
    }
}

  export default Banner;