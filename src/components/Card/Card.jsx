import React from 'react'
import Button from '../UI/Button/Button';
import s from './Card.module.sass'

export default function Card({id, title, background}) {
  return (
    <div className={s.card} style={{backgroundColor: background}}>
        <p>{title}</p>
        <Button/>
    </div>
  )
}