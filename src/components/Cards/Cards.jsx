import React from 'react'
import Card from '../Card/Card'
import s from './Cards.module.sass'

export default function Cards() {
    const card_list = [
        {
            id: 1,
            title:'Годовое ТО',
            background: '#22356F' 
        },
        {
            id: 2,
            title:'Выравнивание колес',
            background: '#0052C1' 
        },
        {
            id: 3,
            title:'Настройка переключателей',
            background: '#76B58B' 
        }
    ]
  return (
    <div className={s.cards}>
        {card_list.map(card => <Card key={card.id} {...card}/>)}
    </div>
  )
}