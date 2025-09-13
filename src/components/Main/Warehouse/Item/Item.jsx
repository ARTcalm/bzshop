import React, {useState}from 'react'
import styles from './Item.module.css'


export const Item = (props) => {

    const {cartItems, setCartItems, item} = props
    const handleAddCart = () => {// К ФУНКЦИИ ДОБАВЛЕНИЯ В КОРЗИНУ, ДОБАВИЛ УСЛОВИЕ ЧТОБЫ ТОВАРЫ НЕ ПОВТОРЯЛИСЬ В КОРЗИНЕ БОЛЬШЕ 1 РАЗА
      const isInArray = cartItems.some(el => el.id === item.id)
      if(!isInArray){
      setCartItems(prev => [...prev, item])}

  }

  const [imageSrc, setImageSrc] = useState(item.img1);
  const handleMouseEnter = (src) => {
    setImageSrc(src);
  };
  
  const handleMouseLeave = () => {
    setImageSrc(item.img1);
  };
    

  let [ShowFullitem, setShowFullItem] = useState(false)  
  
    return(
    <div className={styles.item}>
        <div className={styles.containerImg} onClick={() => setShowFullItem(ShowFullitem = !ShowFullitem)}>
          {imageSrc && (
        <img
          src={"./img/" + imageSrc}
          alt="hovered"
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover'}}
        />
      )}

      <div style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
        <div
          style={{ flex: 1, cursor: 'pointer', width: `280px`}}
          onMouseEnter={() => handleMouseEnter(item.img1)}
          onMouseLeave={handleMouseLeave}
        />
        <div
          style={{ flex: 1, cursor: 'pointer',  }}
          onMouseEnter={() => handleMouseEnter(item.img2)}
          onMouseLeave={handleMouseLeave}
        />
        <div
          style={{ flex: 1, cursor: 'pointer',  }}
          onMouseEnter={() => handleMouseEnter(item.img3)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      </div>
        <h1 className={styles.name}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <b className={styles.price}>{item.price}₽</b>
        <div onClick={handleAddCart} className={styles.addtocart} >ЗАКИНУТЬ</div>
       
          {ShowFullitem && (
              <div className={styles.fullitem}>
                <div className={styles.fullItemContainers}>
                  <div className={styles.containerFullItemImg}>
                    <img src = { "./img/" + item.img1} className={styles.FullItemImg} onClick={() => setShowFullItem(ShowFullitem = !ShowFullitem)} />
                  </div>
                  <div className={styles.containerFullItemStrings}>
                    <div className={styles.FullItemTitle}>{item.title}</div>
                    <div className={styles.FullItemDesc}>{item.desc}</div>
                    <div className={styles.FullItemPrice}>{item.price}₽</div>
                    <div onClick={handleAddCart} className={styles.addtocart_fullitem} >ЗАКИНУТЬ</div>
                  </div>
                </div>
              </div>)}

    </div>
  )
}

export default Item
