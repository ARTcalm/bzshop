import React, { useEffect, useState }  from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PAGES} from "../../../consts";
import { FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export const Header = (props) => {

  //СЧЁТЧИК ВЕЩЕЙ В КОРЗИНЕ
  const {count} = props
  let countStyle = {transform:`scale(0)`}
  if(count !== 0){ 
    countStyle = {transform:`scale(1)`}
  }
  //
  //ПРЕЛОАДЕР
  const [headerStyle, setHeaderStyle] = useState({
    background: `black`,
    backdropFilter: `blur(0px)`
  })  
  const scrollLimit = 200;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollLimit) {
        setHeaderStyle({
          background: `rgba(0, 0, 0, 0.7)`,
          backdropFilter: `blur(10px)`           
        });
      } else {
        setHeaderStyle({
          background: `black`,
          backdropFilter: `blur(0px)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //
    
  const hist = useHistory()

  return (
    <div className={styles.HEADER} id='header' style={{
      background:headerStyle.background,
      backdropFilter: headerStyle.backdropFilter,
      transition: `all 0.4s ease`
      }} >
      <div className={styles.pages}>
            <div className={styles.logo} onClick={() => hist.push( '/sklad')}><img src="./img/comp2svg.svg" /> </div>
            <div className={styles.pages}>
                {PAGES.map(el => (
                    <NavLink key={el.route} to={el.route}>
                        <div  className={styles.categories}  key={el.key} >
                          {el.name}
                        </div>
                    </NavLink>
                ))}
                <FaShoppingCart onClick={() => hist.push('/cart')} className={styles.shopcartbutton} />
                <div className={styles.containerCountOfCartItems} style={{transform:countStyle.transform}} >
                  <div className={styles.countOfCartItems}>{count}</div>
                </div>
            </div>
        </div>
    </div>
  )
}