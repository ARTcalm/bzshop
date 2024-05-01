import React, { useState } from 'react'
import Item from './Item/Item'
import { FaShoppingCart } from 'react-icons/fa'
import { ITEMS } from '../consts'

export const Items = () =>{
    let[cartOpen,setCartOpen] = useState(false)
    return (
      <main>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopcartbutton ${cartOpen && 'active'}`} />
        {ITEMS.map(el => (
            <Item  key={el.id} item={el}  />
        ))}
      </main>
    )
  }

