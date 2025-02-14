import React from 'react'
import { CATEGORIES } from '../../../../consts'
import styles from './Categories.module.css'
import mainstyles from '../../MainWareHouse.module.css'

export const Categories = (category) =>{
    const {chooseCategory} = category // 
    return (
    <header className={mainstyles.wrapper}>
        <div className={styles.categories}>
            {CATEGORIES.map(el => (
                <div key ={el.key} onClick={()=> chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    </header>
    )
}