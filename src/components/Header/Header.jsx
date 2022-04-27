import React from 'react'
import s from './Header.module.sass'
import img from './bike.png'

export default function Header() {
    return (
        <div className={s.header}>
            <div>
                <h2>Что мы предлагаем</h2>
                <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                    ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда
                    помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.
                </p>
            </div>
            <div>
                <img src={img} alt="Bike" />
            </div>
        </div>
    )
}
