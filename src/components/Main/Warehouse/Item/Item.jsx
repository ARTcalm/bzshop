import React, {useState}from 'react'
import styles from './Item.module.css'

export const Item = (props) => {

    const {cartItems, setCartItems, item} = props

    const handleAddCart = () => {// К ФУНКЦИИ ДОБАВЛЕНИЯ В КОРЗИНУ, ДОБАВИЛ УСЛОВИЕ ЧТОБЫ ТОВАРЫ НЕ ПОВТОРЯЛИСЬ В КОРЗИНЕ БОЛЬШЕ 1 РАЗА
      const isInArray = cartItems.some(el => el.id === item.id)

      if(!isInArray)
        setCartItems(prev => [...prev, item])
  }

  let [ShowFullitem, setShowFullItem] = useState(false)  
  
    return(
    <div className={styles.item}>
        <img src = { "./img/" + item.img} onClick={() => setShowFullItem(ShowFullitem = !ShowFullitem)} />
        <h1 className={styles.name}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <b className={styles.price}>{item.price}₽</b>
        <button onClick={handleAddCart} className={styles.addtocart} >ЗАКИНУТЬ</button>
          {ShowFullitem && (
              <div className={styles.fullitem}>
                <div>
                  <img src = { "./img/" + item.img} className={styles.FullItemImg} onClick={() => setShowFullItem(ShowFullitem = !ShowFullitem)} />
                  <h1 className={styles.FullItemTitle}>{item.title}</h1>
                  <p className={styles.FullItemDesc}>{item.desc}</p>
                  <b className={styles.FullItemPrice}>{item.price}₽</b>
                  <button onClick={handleAddCart} className={styles.addtocart_fullitem} >ЗАКИНУТЬ</button>
                </div>
              </div>)}

    </div>
  )
}

export default Item
