import React from 'react'
import Item from './Warehouse/Item/Item'


export const Items = (props) =>{
    const {setCartItems, items} = props
  

    return (
      <main>
        {items.map(el => (
            <Item setCartItems={setCartItems}  key={el.id} item={el}  />
        ))}
      </main>
    )
}
