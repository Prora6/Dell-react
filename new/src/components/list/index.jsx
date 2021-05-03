import React from 'react'
import './style.scss'
import Tricker from '../../images/ticker.png'
import Image from '../../images/image.png'
import Pen from '../../images/pen.png'
import Triangle__one from '../svgIcon/Triangle_one'
import Triangle__two from '../svgIcon/Triangle_two'
import Triangle__thee from '../svgIcon/Triangle_three'
import Laptops from '../../images/laptops.png'
import Image__2 from '../../images/Image2.png'
import Mint from '../../images/mint.png'
import Image__3 from '../../images/Image3.jpg'
import Wallet from '../../images/wallet.png'
import Image__4 from '../../images/Image4.jpg'
import Flight from '../../images/flight.png'
import Podcast from '../../images/podcast.png'
import Microphone from '../../images/microphone.png'
import Recording from '../../images/recording.jpg'
import Planning from '../../images/planning.jpg'
import Note from '../../images/note.png'
import Computer from '../../images/computer.png'
import Relaxation from '../../images/relaxation.jpg'
import Coffe from '../../images/coffe.png'
import Search from '../../images/search.jpg'
import Tickets from '../../images/tickets.png'
import Business from '../../images/business.jpg'

class List extends React.Component {
    render() {
        return (
            <ul className='list'>
                <li className="list__item">
                    <img src={Tricker} alt="" className="list__item-ticker"/>
                    <div className="list__item-information information">
                        <p className="information__text">10:00</p>
                        <h2 className="information__title">СОЗВОНЫ И МЕССЕНДЖЕРЫ</h2>
                        <img src={Image} alt="" className="information__img"/>
                    </div>
                    <div className="list__item-img">
                        <img src={Pen} alt="" className="pen"/>
                    </div>
                    <div className="list__item-content">
                        <p>Большая часть моего рабочего дня проходит в Zoom и Google Meet. У Лайфхакера есть офис в Ульяновске, два года работала редакция в Москве, но в карантин мы решили её закрыть. Открывать не торопимся, ждём конца пандемии. Поэтому сейчас команда Лайфхакера — это около сотни человек, работающих из разных городов.</p>
                        <p>На прошлой неделе во время тестирования ноутбука <a href="" className="link">Dell XPS 13 9310</a> я провёл два десятка звонков: собеседования, планёрки, обсуждение стратегий. Веб-камера с четырьмя линзами передавала чёткую и яркую картинку. Мне понравилась технология шумоподавления — когда в помещении не хватает света, объектив ноутбука фиксирует это и повышает качество видео.</p>
                        <p>По соображениям конфиденциальности все звонки я провожу в наушниках. Подключить мои любимые Bose к ноутбуку по Bluetooth не составило труда. В общем, с имеющимися у меня инструментами организовать работу на удалёнке несложно. Но главное здесь — сами люди. Наша команда быстро адаптировалась к новым условиям и показала высокие профессиональные качества. Очень помогает группа руководителей, которым в этом году я впервые доверил многое из того, что раньше делал своими руками.</p>
                    </div>
                </li>
                <li className="list__item">
                    <img src={Laptops} alt="" className="list__item-laptops"/>
                    <div className="list__item-information information">
                        <p className="information__text">12:30</p>
                        <h2 className="information__title">ПЕРЕПИСКА С КЛИНТАМИ</h2>
                        <img src={Image__2} alt="" className="information__img"/>
                    </div>
                    <img src={Mint} alt="" className="mint"/>
                    <div className="list__item-content">
                        <p>Когда я не на созвоне, я пишу письма. У меня постоянно открыта почта, 30–40 вкладок в браузере, Word и Excel с документами, разные мессенджеры и утилиты. Чемпион по прожорливости — браузер. За неделю работы на Dell XPS 13 9310 проблем с ресурсами не возникло. Это и не удивительно, учитывая его железо.</p>
                        <p>Ноут оснащён процессорами Intel® Core™ 11-го поколения и соответствует стандартам Intel® Evo™. Они отлично делают своё дело. Хорошая производительность и быстрый отклик дали возможность держать открытыми все программы, моментально переключаться между ними, выдержали мой ежедневный поток задач.</p>                      
                    </div>
                </li>
                <li className="list__item">
                    <img src={Image__3} alt="" className="list__item-work"/>
                    <div className="list__item-information information">
                        <p className="information__text">14:00</p>
                        <h2 className="information__title">РАСЧЁТЫ И ФИНАНСЫ</h2>
                        <img src={Image__4} alt="" className="information__img"/>
                    </div>
                    <img src={Wallet} alt="" className="wallet"/>
                    <div className="list__item-content">
                        <p>По определенным причинам, мне не всегда подходят онлайн-инструменты типа Google Docs. Время от времени нужно работать с таблицами на десктопном Excel. Лет 15 назад я открыл для себя макросы и с тех пор моя любовь к этому инструменту не знала границ. Разумеется, здесь с ноутбуком от Dell тоже не возникло никаких сложностей. Он очень шустрый — я замечал это при каждом запуске, намного быстрее моего предыдущего компьютера.</p>
                        <p>После холодного старта ноутбук моментально просыпается и начинает работать. Я настроил распознавание лица для разблокировки — лок-скрин исчезает практически мгновенно. Система для безопасного входа важна, потому меня в работе много конфиденциальных документов, которые не должны видеть посторонние.</p>
                        <p>13-дюймового экрана сначала показалось маловато для офисных задач. Но когда я настроил комфортное масштабирование, работать стало удобно. А ещё у Dell XPS 13 9310 есть технология Eyesafe®, которая снижает уровень вредного синего свечения и рассеивает его по спектру. Кажется, она работает, потому что усталости и боли в глазах я не чувствовал после целого дня работы перед экраном.</p>                      
                    </div>
                </li>
                <li className="list__item">
                    <img src={Flight} alt="" className="list__item-work"/>
                    <div className="list__item-information information">
                        <p className="information__text">16:00</p>
                        <h2 className="information__title">ЗАПИСЬ ПОКАСТА</h2>
                        <img src={Podcast} alt="" className="information__img"/>
                    </div>
                    <img src={Microphone} alt="" className="microphone"/>
                    <div className="list__item-content">
                        <p>Лайфхакер выпускает несколько подкастов, и я периодически выступаю ведущим одного из них — «Кто бы говорил». В неделю тестирования ноута мы как раз записывали очередной выпуск с моим участием. Мощности Dell XPS 13 9310 хватило на отличную запись звука и передачу видео — запись подкаста мы сопровождаем прямой трансляцией на YouTube.</p>
                        <p>Чтобы создать звуковую дорожку, нужен специальный софт, допустим, программа Audacity. Она довольно капризна и требовательна к ресурсам на больших файлах. Никаких проблем не возникло, а качество звука и видео не отличалось от того, к которому привыкли наши слушатели.</p>
                        <p>Помимо тяжелых аудиофайлов у меня много информации на локальном хранении, поэтому память девайсов для меня — важный фактор. Разумеется, за неделю тестирования Dell XPS 13 9310, я и близко не подошёл, чтобы задействовать все ресурсы. Но через год использования было бы полезно его ёмкое хранилище — 512 Гб на твёрдотельном накопителе.</p>                      
                    </div>
                </li>
                <li className="list__item">
                    <img src={Recording} alt="" className="list__item-work"/>
                    <div className="list__item-information information">
                        <p className="information__text">17:30</p>
                        <h2 className="information__title">ПЛАНИРОВАНИЕ ЗАДАЧ</h2>
                        <img src={Planning} alt="" className="information__img"/>
                    </div>
                    <img src={Note} alt="" className="note"/>
                    <div className="list__item-content">
                        <p>В разное время я увлекался множеством техник планирования, но в конце концов оставил три главных инструмента: календарь, почта, заметки. </p>
                        <p>В календаре — встречи, собеседования, звонки, личные планы.<br/>В почте — самые важные вопросы, которые требуют глубокого личного участия.<br/>В заметках — вопросы к обсуждению, мысли, спонтанные наблюдения.</p>
                        <p>Никакие другие методы планирования в мою рутину не вмещаются. Главное, что нужно суметь — выделить время для отдыха. Конечно, выгорания невозможно избежать, время от времени это происходит со всеми. Главное — заметить это состояние как можно раньше и уйти на паузу. В отпуск, взять выходной, даже просто лечь поспать не по расписанию.</p>                      
                    </div>
                </li>
                <li className="list__item">
                    <div className="list__item-work">
                        <img src={Computer} alt="" className="computer"/>
                    </div>
                    <div className="list__item-information information">
                        <p className="information__text">19:00</p>
                        <h2 className="information__title">ОТДЫХ</h2>
                        <img src={Relaxation} alt="" className="information__img"/>
                    </div>
                    <img src={Coffe} alt="" className="coffe"/>
                    <div className="list__item-content">
                        <p>После работы я решил посмотреть «Рика и Морти», чтобы отвлечься от дел. У экрана Dell XPS 13 9310 хорошая цветопередача и высокое качество изображения, смотреть любимый сериал было приятно. </p>
                        <p>Музыку в динамиках я включал только для проверки. Предпочитаю всегда использовать наушники, чтобы никому не мешать и отсекать все внешние шумы. Динамики для ноутбука такого небольшого размера показались очень громкими, на максимальном уровне я бы точно ничего не стал включать.</p>
                    </div>
                </li>
                <li className="list__item">
                    <img src={Search} alt="" className="list__item-work"/>
                    <div className="list__item-information information">
                        <p className="information__text">21:00</p>
                        <h2 className="information__title">ВЫЕЗД В КОМАНДИРОВКУ</h2>
                        <img src={Business} alt="" className="information__img"/>
                    </div>
                    <img src={Tickets} alt="" className="tickets"/>
                    <div className="list__item-content">
                        <p>Вечером я полетел в командировку в Москву. Это привычная часть моей работы: я живу в Ульяновске, а большинство важных встреч проходит в Москве. В 2020 я ездил совсем мало: за год набралось перелетов 15. Обычно счёт идёт на многие десятки.</p>
                        <p>Благодаря поездке у меня была возможность оценить Dell XPS 13 9310 в дороге. Он отлично размещается на откидном столике в самолёте — в полёте я снова смотрел «Рика и Морти». Батареи хватило надолго, я не волновался о зарядке весь день. Во время работы от аккумулятора ноутбук не перегревался — иногда немного шумели вентиляторы, но не создавая дискомфорта.</p>
                        <p>Мне понравились материалы, из которых сделан ноутбук. Несмотря на то, что он тяжеловат для своих габаритов, металлический корпус и прорезиненные клавиатура и тачпад создают приятные тактильные ощущения. Корпус Dell XPS 13 9310 выглядит крепким и не царапается при взаимодействии с поверхностями. Ход клавиш тоже был комфортным для меня. Учитывая, что всё остальное работает на отлично, это было приятным дополнением. Как и то, что упаковка ноутбука сделана из переработанных материалов — для меня это важный нюанс.</p>
                    </div>
                </li>
            </ul>
        )
    }
}

//в list__item-information information p и h2 завернуть в одну обёртку и её уже позиционировать 
// link сделать link__text
  export default List;