import React, { use, useState } from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../../consts";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Footer from './Footer';
import Contact from './Contact';

export const Header = (props) => {
    const {cartItems, setCartItems} = props
    

    
    const showCartItems = (cartItems) =>{//ФУНКЦИЯ ПОКАЗА ТОВАРОВ В КОРЗИНЕ + Добавил подсчёт суммы 
      
      let summa = 0
      cartItems.forEach(el => summa += Number.parseFloat(el.count) * Number.parseFloat(el.price))


      return(
      <div>{cartItems.map(el => 
      (
        
        <div key={el.id} className={styles.CartItems}>
            <img src = { "./img/" + el.img} className={styles.cartIMG} />
            <p className={styles.cartTITLE}>{el.title}</p>
            <b className={styles.cartPRICE}>{el.price}₽</b>
            <FaTrash className={styles.DeleteCartItems} onClick={() => {DeleteCartItems(el.id)}} key={el.id} item={el} />
            <button className={styles.cartPlus}  onClick={()=>plus(el.id)} >+</button>
            <button className={styles.cartMinus} onClick={()=> minus(el.id)}>-</button>
            <p className = {styles.colichestvo} >Количество : {el.count}</p>
        </div>
      ))}<p className={styles.Summa}>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
      </div>)
    }


    const plus = (id) =>{
      setCartItems(cartItems => {
      return cartItems.map(el => {
        if(el.id === id){
          return {
            ...el,
            count: ++el.count
          }
        }
        return el
      } )}
    )}

    const minus = (id) =>{
      setCartItems(cartItems => {
      return cartItems.map(el => {
        if(el.id === id){
          
          return {
            ...el,
            count: el.count - 1 > 1 ? el.count - 1 : 1
          }
        }
        return el
      } )}
    )}

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
                        <div  className={styles.categories}  key={el.key} ><div>{el.name}</div></div>
                    </NavLink>
                ))}
              <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={styles.shopcartbutton} />
              {cartOpen && (<div className={styles.shoppingCart} >
                {cartItems.length > 0 ?
                showCartItems(cartItems): showNothing()}
              </div>)}
              <Contact />
              <Footer />
            </div>
    </header>
  )
}