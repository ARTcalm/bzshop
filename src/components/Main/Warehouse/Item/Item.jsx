import React, { Component } from 'react'
import styles from './Item.module.css'

export const Item = (props) => {

    const {setCartItems, item} = props

    const handleAddCart = () => {
        setCartItems(prev => [...prev, item])
    }

    return (
      <div className={styles.item}>
        <img src = { "./img/" + item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}₽</b>
        <button onClick={handleAddCart} className={styles.addtocart} >ЗАКИНУТЬ</button>
      </div>
    )
}

export default Item
