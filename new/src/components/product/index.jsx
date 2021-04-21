import React from 'react'

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
                    <div className="product__content-img">
                        <img src="" alt="" className="laptop"/>
                        <img src="" alt="" className="laptop-left"/>
                        <img src="" alt="" className="laptop-right"/>
                    </div>
                </div>
                <div className="product__building">
                    <img src="" alt="" className="building"/>
                </div>
                <div className="product__picture">
                    <img src="" alt="" className="picture"/>
                </div>
                <div className="product__sun">
                    <img src="" alt="" className="sun"/>
                </div>
                <div className="product__detail">
                    <img src="" alt="" className="detail"/>
                </div>
                <div className="product__water">
                    <img src="" alt="" className="water"/>
                </div>
            </section>
        )
    }
}

  export default Product;