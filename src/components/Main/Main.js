import React, { useState } from "react";
import Categories from "./Categories"

import Items from "./Items"
import Footer from "./Footer"
import { ITEMS } from "./consts";
import { ORDER } from "./consts";


export const Main = () => {
  const[orders, setOrders] = useState(ORDER)
  const [currentItems, setCurrentItems] = useState([])
  const [ShowFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  const [functionUI] = useState([{
      title: 'HYUNA',
      categories:'склад'
    },
    {
      title:'tete',
      categories:'торги'
    },
    {
      title:'pzds',
      categories:'о нас'},
    {
      title:'TEST VERSION',
      categories:'контакты'
    }])
  const [currentUI, setCurrentUI] = useState([])

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

  const chooseCategoryUI = (categories) => {
    const filteredUI = functionUI.filter(el => el.categories === categories)
    setCurrentUI(filteredUI)
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

      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {ShowFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      <Footer/>
  </div>
  )
}

