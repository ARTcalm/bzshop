import React, { useState } from 'react'
import Item from './Item/Item'
import styles from '../MainWareHouse.module.css'
import ReactPaginate from "react-paginate";

export const Items = (props) =>{
    const { cartItems, setCartItems, items} = props

      const itemsPerPage = 8
      const [itemOffset, setItemOffset] = useState(0)
      const endOffset = itemOffset + itemsPerPage 
      const currentItemsOnPage = items.slice(itemOffset, endOffset)
      const pageCount = Math.ceil(items.length/itemsPerPage)
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected  * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };

    return (
      <div className={styles.ITEMS}>
        <div className={styles.itemsblock}>
          <div className={styles.elementsOfItems}>
          {currentItemsOnPage.map(el => (
              <Item setCartItems={setCartItems} cartItems={cartItems} key={el.id} item={el} />
          ))}</div>
          <ReactPaginate 
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    containerClassName={styles.containerPagination}
                    pageClassName={styles.pagePagination}
                    pageLinkClassName={styles.pageElement}
                />
        </div>
      </div>
    )
}
