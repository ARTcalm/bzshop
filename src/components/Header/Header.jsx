import React, { useState } from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../Main/consts";
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

export default function Header(props) {
    const {cartItems} = props // закинешь их в компонту корзины, когда сделаешь

    const showCartItems = (cartItems) =>{
      return(
      <div>{cartItems.map(el => 
      (
        <div key={el.id} className={styles.CartItems}>
            <img src = { "./img/" + el.img} className={styles.cartIMG} />
            <p className={styles.cartTITLE}>{el.title}</p>
            <b className={styles.cartPRICE}>{el.price}</b>
        </div>
      ))}
      </div>)
    }
 
    const showNothing = () =>{
      return(<div className={styles.empty}>В КАРМАНАХ ПУСТО</div>)
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
