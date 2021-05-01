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
import Reflection from '../../images/reflection.png'
import Sandy from '../../images/Sandy.png'
import Twitter from '../svgIcon/Twitter.jsx'
import Vkontakte from '../svgIcon/Vkontakte.jsx'
import Facebook from '../svgIcon/Facebook.jsx'
import Money from '../../images/mini_money.png'
import Mending from '../../images/mending.png'
import Please from '../../images/please.png'

class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__content">
                    <div className="banner__content-information information">
                        <h1 className="information__title">КАК УПРАВЛЯТЬ ЛЮДЬМИ</h1>
                        <h3 className="information__description">и не сойти с ума в 2021</h3>             
                    </div>
                    <div className="banner__content-social">
                        <div className="link__wrap">
                            <a href="" className="link">
                                <Twitter  className="link__img"/>
                            </a>
                            <a href="" className="link">
                                <Vkontakte className="link__img"/>
                            </a>
                            <a href="" className="link">
                                <Facebook className="link__img"/>
                            </a>
                        </div>
                    </div>
                    <div className="banner__img img">
                        <img src={Man} alt="" className="banner__img-man"/>
                        <img src={Hi} alt="" className="banner__img-hi"/>
                        <img src={Early} alt="" className="banner__img-early"/>
                        <img src={Cash} alt="" className="banner__img-cash"/>
                        <img src={Work} alt="" className="banner__img-work"/>
                        <img src={Thanks} alt="" className="banner__img-thanks"/>
                        <img src={Folders} alt="Folders" className="banner__img-folders"/>
                        <img src={Clock} alt="Clock" className="banner__img-clock"/>
                        <img src={Picture} alt="Picture" className="banner__img-picture"/>
                        <img src={Cursor} alt="Cursor" className="banner__img-cursor"/>
                        <img src={Reflection} alt="Reflection" className="banner__img-reflection"/>
                        <img src={Sandy} alt="Sandy" className="banner__img-sandy"/>
                        <img src={Money} alt="money" className="banner__img-money"/>
                        <img src={Mending} alt="mending" className="banner__img-mending"/>
                        <img src={Please} alt="please" className="banner__img-please"/>
                    </div>
                </div>
            </section>
        )
    }
}
//переименовать классы отрезать "контент" изаменить на общее понятие 
export default Banner;