import React, { useState } from 'react'
import Item from './Item/Item'
import { ITEMS } from '../consts'


export const Items = (currentItems) =>{
    const[items] = useState(currentItems)

    return (
      <main>
        {items.map(el => (
            <Item  key={el.id} item={el}  />
        ))}
      </main>
    )
}
