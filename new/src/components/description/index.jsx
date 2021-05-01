import React from 'react'
import'./style.scss'
import Clip from'../../images/clip.png'
import Notebook from '../../images/notebook.png'
import Turned from'../../images/turned.png'

class Description extends React.Component {
    render() {
        return (
            <section className="description">
                <div className="description__content">
                    <p className="description__content-text">
                        Собрать удалённое совещание на много человек. Организовать работу сотрудников вне офиса. Учесть новые правила безопасности. На плечи руководителей в этом году свалилось много нетривиальных задач. И они вряд ли исчезнут в 2021. Как справляться с этой нагрузкой? Мы решили узнать у издателя Лайфхакера, что входит в его топ-менеджерские задачи, и чем в их решении может помочь производительная техника.
                    </p>
                </div>
                <div className="description__img">
                    <img src={Clip} alt="clip" className="description__img-clip"/>
                    <img src={Notebook} alt="notebook" className="description__img-notebook"/>
                    <img src={Turned} alt="turned" className="description__img-turned"/>
                </div>
            </section>
        )
    }
}

//замнить падинги на марджины
  export default Description;