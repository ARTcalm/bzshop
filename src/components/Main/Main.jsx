import React, { useEffect, useState } from "react";
import {Items} from "./Items"
import { ITEMS } from "./consts";
import { Categories } from "./Categories/Categories";


export const Main = (props) => {

  const { cartItems, setCartItems } = props
  const [currentItems, setCurrentItems] = useState([])
  
  const [ShowFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  
  
  useEffect(()=> {setCurrentItems(ITEMS)},[]) // СТРАННАЯ ХУЙНЯ ПОЗЖЕ ПОЙМУ

  const onShowItem = (item) =>{
    setFullItem(item)
    setShowFullItem(prev => !prev)
  }

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
      <Items items={currentItems} setCartItems={setCartItems} cartItems={cartItems} />
      {ShowFullItem && <ShowFullItem onShowItem={onShowItem} item={fullItem} setCartItems={setCartItems} cartItems={cartItems}/>}
  </div>
  )
}