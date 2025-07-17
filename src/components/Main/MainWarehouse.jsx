import React, { useEffect, useRef, useState } from "react";
import {Items} from "./Warehouse/Items"
import { ITEMS } from "../../consts";
import { Categories } from "./Warehouse/Categories/Categories";
import styles from './MainWareHouse.module.css'
import { Slider } from "./Warehouse/Slider/Slider";




export const Main = (props) => {

  const { cartItems, setCartItems } = props

  const [currentItems, setCurrentItems] = useState([])

  const chooseCategory = (category) => {
      if(category === 'Всё'){
        setCurrentItems(ITEMS)
        return
      }

      setCurrentItems(ITEMS.filter(el => el.category === category)) 
    }
  useEffect(()=> {setCurrentItems(ITEMS)},[])

  return ( 
  <main>
      <Slider />
    <div className={styles.WarehousePage}>
      <Categories  chooseCategory={chooseCategory} items={currentItems} />
      <Items items={currentItems} setCartItems={setCartItems} cartItems={cartItems}  />
    </div>
  </main>
  )
}

