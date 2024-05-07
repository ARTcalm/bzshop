import React from 'react'
import styles from './Item.module.css'

export const Item = (props) => {

    const {cartItems, setCartItems, item} = props

    const handleAddCart = () => {// К ФУНКЦИИ ДОБАВЛЕНИЯ В КОРЗИНУ, ДОБАВИЛ УСЛОВИЕ ЧТОБЫ ТОВАРЫ НЕ ПОВТОРЯЛИСЬ В КОРЗИНЕ БОЛЬШЕ 1 РАЗА
      const isInArray = cartItems.some(el => el.id === item.id)

      if(!isInArray)
        setCartItems(prev => [...prev, item])
    }

    return (
      <div className={styles.item}>
        <img src = { "./img/" + item.img} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}₽</b>
        <button onClick={handleAddCart} className={styles.addtocart} >ЗАКИНУТЬ</button>
      </div>
    )
}

export default Item
