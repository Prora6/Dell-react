import React from 'react'
import'./style.scss'
import Clip from'../../images/clip.png'
import Notebook from '../../images/notebook.png'

class Description extends React.Component {
    render() {
        return (
            <section className="description">
                <div className="description__content">
                    <p className="description__content-text">
                        Собрать удалённое совещание на много человек. Организовать работу сотрудников вне офиса. Учесть новые правила безопасности. На плечи руководителей в этом году свалилось много нетривиальных задач. И они вряд ли исчезнут в 2021. Как справляться с этой нагрузкой? Мы решили узнать у издателя Лайфхакера, что входит в его топ-менеджерские задачи, и чем в их решении может помочь производительная техника.
                    </p>
                </div>
                <img src={Clip} alt="" className="description__img-clip"/>
                <img src={Notebook} alt="" className="description__img-notebook"/>
            </section>
        )
    }
}

//замнить падинги на марджины
  export default Description;