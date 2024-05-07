import React, { useEffect, useState } from "react";
import {Items} from "./Items"
import { ITEMS } from "./consts";
import { Categories } from "./Warehouse/Categories/Categories";


export const Main = (props) => {

  const { setCartItems } = props

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
  <div className="wrapper">
      <Categories chooseCategory={chooseCategory} items={currentItems} />
      <Items items={currentItems} setCartItems={setCartItems} />

  </div>
  )
}

