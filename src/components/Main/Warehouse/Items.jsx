import React from 'react'
import Item from './Item/Item'
import mainstyles from '../MainWareHouse.module.css'

export const Items = (props) =>{
    const { cartItems, setCartItems, items} = props


    return (
      <div className={mainstyles.wrapper}>
        {items.map(el => (
            <Item setCartItems={setCartItems} cartItems={cartItems} key={el.id} item={el} />
        ))}
      </div>
    )
}
