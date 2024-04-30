import React, { useState } from "react";
import Categories from "./Categories"
import Header from "./Header"
import Items from "./Items"
import Footer from "./Footer"



export const Main = () => {
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState([])
  const [items] = useState([
    {
      id: 1,
      title: 'Gray Hoodie',
      img: '1.jpg',
      desc: 'GREATE Hoodie',
      category: 'Худи',
      price: '2500'
    },

    {
      id: 2,
      title: 'Gray Jeans',
      img: '2.1.jpg',
      desc: 'boogie-woogie',
      category: 'Джинсы',
      price: '2900'
    }, 
    {
      id: 3,
      title: 'Dust-Pink Brassiere',
      img: '3.jpeg',
      desc: "for Ulya's boobs",
      category: "Лифак",
      price:'0'
    },
    {
      id: 4,
      title: 'Pink Cross',
      img: '4.jpg',
      desc: 'REAL STYLE',
      category: 'Обувь',
      price: '2500'
    }
  ])
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
      setCurrentItems(items)
      return
    }

    setCurrentItems(items.filter(el => el.category === category))
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
      <Header orders={orders} onDelete={deleteOrder} item={items} />
      <Categories chooseCategory={chooseCategory} chooseCategoryUI={chooseCategoryUI} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {ShowFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      <Footer/>
  </div>
  )
}

