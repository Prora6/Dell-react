import React from 'react'
import './style.scss'
import Building from '../../images/building.png'
import Waves from '../../images/waves.jpg'
import Detail from '../../images/detail.png'
import Sun from '../../images/sun.png'
import Light__small from '../../images/light__small.png'
import Light__big from '../../images/light__bit.png'
import Water from '../../images/water.png'
import Left from '../../images/left_laptop.png'
import Centre from '../../images/centr_laptop.png'
import Right from '../../images/right_laptop.png'

class Product extends React.Component {
    render() {
        return (
            <section className="product">
                <div className="product__content">
                    <div className="product__content-text">
                        <p>Чтобы справиться с высокой нагрузкой, нужна надёжная техника. Ноутбуки Dell помогут выполнять ответственные рабочие задачи, в которых требуется высокая производительность и неприемлемы технические сбои.</p>
                        <p>Отличное сочетание мощности и компактности представляет собой ноутбук XPS 13 9310 с 13-дюймовым экраном. Он быстро работает в режиме многозадачности и обеспечивает высокую скорость, даже когда вы запускаете много ресурсозатратных приложений сразу. Это лёгкое, но прочное устройство: экран защищён покрытием Corning® Gorilla® Glass 6, устойчивым к ударным нагрузкам и царапинам. </p>
                        <p>Дисплей InfinityEdge с четырехсторонней рамкой и технологиями Dolby Vision™ обладает высокоточной цветопередачей и предотвращает усталость глаза, даже если вы работаете много часов подряд. А инфракрасная камера с функцией Windows Hello распознаёт лица и помогает настроить права так, чтобы доступ к ноутбуку был ограничен только вами.</p>
                        <p>Также у компьютера от Dell есть ещё одна версия — XPS 13 (9310) 2-в-1. Это ноутбук-трансформер, способный принимать форму планшета. Он подойдёт для самого широкого спектра творческих и управленческих задач. В ноутбуке реализована система адаптивного управления производительностью Intel Dynamic Tuning, которая позволяет  оптимизировать рабочую нагрузку и увеличить быстродействие.</p>
                    </div>
                    <div className="product__content-button">
                        <button className="button">
                            Выбрать ноутбук
                        </button>
                    </div>
                </div>
                <div className="product__laptop">
                    <img src={Left} alt="" className="left_laptop"/>
                    <img src={Centre} alt="" className="centre_laptop"/>
                    <img src={Right} alt="" className="right_laptop"/>
                </div>
                <div className="product__img">
                    <div className="product__img-building">
                        <img src={Building} alt="" className="building"/>
                    </div>
                    <div className="product__img-picture">
                        <img src={Waves} alt="" className="picture"/>
                    </div>
                    <div className="product__img-sun">
                        <img src={Sun} alt="" className="sun"/>
                        <img src={Light__small} alt="" className="light__small"/>
                        <img src={Light__big} alt="" className="light__big"/>
                    </div>
                    <div className="product__img-detail">
                        <img src={Detail} alt="" className="detail"/>
                    </div>
                    <div className="product__img-water">
                        <img src={Water} alt="" className="yellow"/>
                    </div>
                </div>     
            </section>
        )
    }
}


//ноутбуки сделать тремя разными картиками 
//кнопку переднелать в ссылку
//вынести общий абсолют у img

  export default Product;