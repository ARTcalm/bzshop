import React from 'react'
import { CATEGORIES } from '../../../../consts'
import styles from './Categories.module.css'
import mainstyles from '../../MainWareHouse.module.css'

export const Categories = (category) =>{
    const {chooseCategory} = category // 
    return (
    <div className={mainstyles.CATEGORIES}>
        <div className={styles.categories}>
            {CATEGORIES.map(el => (
                    <div className={styles.categoriesinfo} key ={el.key} onClick={()=> chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    </div>
    )
}