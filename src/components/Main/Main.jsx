import React, { useEffect, useState } from "react";
import {Items} from "./Warehouse/Items"
import Footer from "./Footer"
import { ITEMS } from "./consts";
import { ORDER } from "./consts";
import { Categories } from "./Warehouse/Categories/Categories";


export const Main = () => {
  const[orders, setOrders] = useState(ORDER)
  const [currentItems, setCurrentItems] = useState([])
  const [ShowFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  
  
  useEffect(()=> {setCurrentItems(ITEMS)},[]) // СТРАННАЯ ХУЙНЯ ПОЗЖЕ ПОЙМУ

  const onShowItem = (item) => {
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



  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(el => el.id !== id))
  }

  const addToOrder = (item) => {
    const isInArray = orders.some(el => el.id === item.id)

    if(!isInArray)
      setOrders(prev => [...prev, item])
  }


  return (
  <div className="wrapper">
      <Categories chooseCategory={chooseCategory} items={currentItems} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      <Footer/>
  </div>
  )
}

