import React from 'react'
import { CATEGORIES } from '../../consts'
import styles from './Categories.module.css'

export const Categories = (category) =>{
    const {chooseCategory} = category // 
    return (
    <header>
    <div className={styles.categories}>
        {CATEGORIES.map(el => (
            <div key ={el.key} onClick={()=> chooseCategory(el.key)}>{el.name}</div>
        ))}
    </div>
    </header>
    )
}