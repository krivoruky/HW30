import React from 'react'
import s from './NavBar.module.sass'
import logo from './logo.png'
import Button from '../UI/Button/Button'

export default function NavBar() {
  return (
    <nav className={s.navigation}>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="#"><div>О нас</div></a>
        </li>
        <li>
          <a href="#"><div>Услуги</div></a>
        </li>
        <li>
          <a href="#"><div>Аренда</div></a>
        </li>
      </ul>
      <Button />
    </nav>
  )
}
