import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../../../consts";
import { FaShoppingCart } from 'react-icons/fa';
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export const Header = () => {

  const hist = useHistory()

  return (
    <div className={styles.HEADER} id='header' >
      <div className={styles.pages}>
            <div className={styles.logo} onClick={() => hist.push( '/sklad')}>BZ</div>
            <div className={styles.pages}>
                {PAGES.map(el => (
                    <NavLink key={el.route} to={el.route}>
                        <div  className={styles.categories}  key={el.key} >
                          {el.name}
                        </div>
                    </NavLink>
                ))}
                <FaShoppingCart onClick={() => hist.push('/cart')} className={styles.shopcartbutton} />
            </div>
        </div>
    </div>
  )
}