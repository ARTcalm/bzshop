import React, {useEffect, useState } from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../../../consts";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



export const Header = (props) => {
    const {cartItems, setCartItems} = props
    

    
    const showCartItems = (cartItems) =>{//ФУНКЦИЯ ПОКАЗА ТОВАРОВ В КОРЗИНЕ 
      
    //ПОДСЧЁТ СУММЫ СТОИМОСТИ ТОВАРОВ
    let summa = 0
    cartItems.forEach(el => summa += Number.parseFloat(el.count) * Number.parseFloat(el.price))
    
    //ФУНКЦИИ ПРИБАВЛЕНИЯ/УБАВЛЕНИЯ КОЛ-ВА ТОВАРА В КОРЗИНЕ
    const plus = (id) =>{
      setCartItems(cartItems => {
      return cartItems.map(el => {
        if(el.id === id){
          return {
            ...el,
            count: el.count + 1
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
    ////

    //ФУНКЦИЯ УДАЛЕНИЯ ТОВАРОВ ИЗ КОРЗИНЫ
    const DeleteCartItems = (id) =>{
      setCartItems(cartItems => cartItems.filter(el=> el.id !== id))
      
    }

      return(
      <div>{cartItems.map(el => 
      (
        
        <div key={el.id} className={styles.CartItems}>
            <img src = { "./img/" + el.img} className={styles.cartIMG} alt='cartImage'/>
            <p className={styles.cartTITLE}>{el.title}</p>
            <b className={styles.cartPRICE}>{el.price}₽</b>
            <FaTrash className={styles.DeleteCartItems} onClick={() => {DeleteCartItems(el.id)}} key={el.id} item={el} />
            <div className={styles.PMButtons}>
              <button className={styles.cartPlus}  onClick={()=>plus(el.id)} >+</button>
              <p className = {styles.colichestvo}>{el.count}</p>
              <button className={styles.cartMinus} onClick={()=> minus(el.id)}>-</button>
            </div>
            
        </div>
      ))}<p className={styles.Summa}>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
      </div>)
    }


  const showNothing = () =>{    //ФУНКЦИЯ ПУСТОЙ КОРЗИНЫ
      return(<div className={styles.empty}>В КАРМАНАХ ПУСТО</div>) 
    }

  
  const backmainpage = () =>{
    //НУЖНА ФУНКЦИЯ ВОЗВРАТА НА ГЛАВНУЮ СТРАНИЦУ ТОБИЖ НА СКЛАД
  }

  let[cartOpen,setCartOpen] = useState(false)

  return (
    <div className={styles.HEADER}>
      <div className={styles.background}>
            <div className={styles.logo} onClick={() => backmainpage()} >BZ</div>
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
            </div>
        </div>
    </div>
  )
}