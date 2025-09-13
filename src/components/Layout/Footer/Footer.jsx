import React from 'react'
import styles from './Footer.module.css';
import { FaAngleDoubleUp, FaInstagram, FaTelegram, FaVk } from 'react-icons/fa';

export const Footer = () => { 
  
  const TurnUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			window.scrollBy(0,-30);
			setTimeout(TurnUp, 5);}
  }

  return (
    <div className={styles.FOOTER}>
      <div className={styles.BackButton}  onClick={() => TurnUp()}><FaAngleDoubleUp className={styles.DoubleUp}/><p className={styles.ButtonLabel} >наверх</p></div>
      <div className={styles.Blocks}>
        <div className={styles.SocietyBlock}>
          <p><FaVk />VK: </p>
          <p><FaInstagram />INST:</p>
          <p><FaTelegram/>TG: </p>
        </div>
        <div className={styles.ContactBlock}>
          <p>Adress:</p>
          <p>Mail:</p>
          <p>Telephone:</p>
        </div>
      </div>
    </div>
  )
}
