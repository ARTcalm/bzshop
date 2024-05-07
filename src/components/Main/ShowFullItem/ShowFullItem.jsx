import React from 'react'
import styles from './Item.module.css'

export const ShowFullItem = (props) => {

    const {setCartItems, cartItems, onShowItem, item} = props

    const handleAddCart = () => {// К ФУНКЦИИ ДОБАВЛЕНИЯ В КОРЗИНУ, ДОБАВИЛ УСЛОВИЕ ЧТОБЫ ТОВАРЫ НЕ ПОВТОРЯЛИСЬ В КОРЗИНЕ БОЛЬШЕ 1 РАЗА
        const isInArray = cartItems.some(el => el.id === item.id)
  
        if(!isInArray)
          setCartItems(prev => [...prev, item])
    }

    return (
      <div className={styles.FullItem}>
        <div>
        <img src = { "./img/" + item.img} onClick = {() => onShowItem(item)} />
        <h2 className={styles.fullTITLE}>{item.title}</h2>
        <p className={styles.fullDESC}>{item.desc}</p>
        <b className={styles.fullPRICE}>{item.price}₽</b>
        <button onClick={handleAddCart} className={styles.addtocart} >ЗАКИНУТЬ</button>
        </div>
      </div>
    )
}
export default ShowFullItem