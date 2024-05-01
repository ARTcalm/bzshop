import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../Main/consts";

export default function Header(props) {

  return (
    <header>
        <header>
            <span className={styles.logo} >BZ</span>
            <div className={styles.pages}>
                {PAGES.map(el => (
                    <NavLink to={el.route}>
                        <div key={el.key}>{el.name}</div>
                    </NavLink>
                ))}
            </div>
        </header>
    </header>
  )
}
