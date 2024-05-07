import React, { useState } from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../Main/consts";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Footer from './Footer';

export default function Header(props) {
    const {cartItems,setCartItems} = props 

    const showCartItems = (cartItems) =>{//ФУНКЦИЯ ПОКАЗА ТОВАРОВ В КОРЗИНЕ + Добавил подсчёт суммы 
      let summa = 0
      cartItems.forEach(el => summa += Number.parseFloat(el.price))
      return(
      <div>{cartItems.map(el => 
      (
        <div key={el.id} className={styles.CartItems}>
            <img src = { "./img/" + el.img} className={styles.cartIMG} />
            <p className={styles.cartTITLE}>{el.title}</p>
            <b className={styles.cartPRICE}>{el.price}₽</b>
            <FaTrash className={styles.DeleteCartItems} onClick={() => DeleteCartItems(el.id)} key={el.id} item={el} />
        </div>
      ))}<p className={styles.Summa}>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
      </div>)
    }

    const showNothing = () =>{    //ФУНКЦИЯ ПУСТОЙ КОРЗИНЫ
      return(<div className={styles.empty}>В КАРМАНАХ ПУСТО</div>) 
    }
    const DeleteCartItems = (id) =>{//ФУНКЦИЯ УДАЛЕНИЯ ТОВАРОВ ИЗ КОРЗИНЫ
      setCartItems(cartItems => cartItems.filter(el=> el.id !== id))
    }

    let[cartOpen,setCartOpen] = useState(false)

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
              {cartOpen && (<div className={styles.shoppingCart} >
                {cartItems.length > 0 ?
                showCartItems(cartItems): showNothing()}
              </div>)}
              <Footer className={styles.footer}/>
            </div>
    </header>
  )
}
