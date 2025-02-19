import React, { useEffect, useState } from "react";
import {Items} from "./Warehouse/Items"
import { ITEMS } from "../../consts";
import { Categories } from "./Warehouse/Categories/Categories";
import styles from './MainWareHouse.module.css'



export const Main = (props) => {

  const { cartItems, setCartItems } = props

  const [currentItems, setCurrentItems] = useState([])

  useEffect(()=> {setCurrentItems(ITEMS)},[]) // СТРАННАЯ ХУЙНЯ ПОЗЖЕ ПОЙМУ

  const chooseCategory = (category) => {
    if(category === 'Всё'){
      setCurrentItems(ITEMS)
      return
    }

    setCurrentItems(ITEMS.filter(el => el.category === category)) 
  }

  return ( 
  <main className={styles.Main}>
      <Categories chooseCategory={chooseCategory} items={currentItems} />
      <Items items={currentItems} setCartItems={setCartItems} cartItems={cartItems}  />
  </main>
  )
}

