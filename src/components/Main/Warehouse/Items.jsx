import React, { useState } from 'react'
import Item from './Item/Item'
import { ITEMS } from '../consts'


export const Items = (props) =>{
    const { setCartItems, items } = props


    return (
      <main>
        {items.map(el => (
            <Item setCartItems={setCartItems}  key={el.id} item={el}  />
        ))}
      </main>
    )
}
