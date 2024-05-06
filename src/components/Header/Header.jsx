import React, { useState } from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../Main/consts";
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

export default function Header(props) {
    const {cartItems, setCartItems} = props // закинешь их в компонту корзины, когда сделаешь

    const[cartOpen,setCartOpen] = useState(false)

    console.log('Предметы для корзины', cartItems)

  return (
    <header>
            <span className={styles.logo} >BZ</span>
            <div className={styles.pages}>
                {PAGES.map(el => (
                    <NavLink key={el.route} to={el.route}>
                        <div  className={styles.categories}  key={el.key} >{el.name}</div>
                    </NavLink>
                ))}
              <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={styles.shopcartbutton} />
              <Footer className={styles.footer}/>
            </div>
    </header>
  )
}
// Держите корзину тут и не спеши на нее логику накручивать. Ты сейчас все состояние хранишь в useState. Рано или поздно тебе придется почти полностью переписывать всю логику, которая будет с ним связана. Для убравления логичкой используются стейт менеджеры. Например Redux или Zustand. Это сложные технологии, которые позволяют держать в них все управление данными.Лучше пока сверстай красиво все страницы, наведи порядок в папках, продумай, какая логика тебе требуется. Потом уже можно начать думать о том, как ты будешь всем этим управлять.  