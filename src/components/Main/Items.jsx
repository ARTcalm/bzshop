import React from 'react'
import Item from './Item/Item'


export const Items = (props) =>{
    const {cartItems, setCartItems, items} = props
  

    return (
      <main>
        {items.map(el => (
            <Item setCartItems={setCartItems} cartItems={cartItems} key={el.id} item={el}  />
        ))}
      </main>
    )
}
