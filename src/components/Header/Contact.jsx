import React from 'react'
import styles from './Header.module.css';

export default function Contact() {   
    return (
    <main className={styles.Contact}>

          <p className={styles.HContact}>КУДА ПИСАТЬ КУДА ЗВОНИТЬ?</p> <p className={styles.WContact}>КУДА ЕХАТЬ?</p>
          <p className={styles.Telegram} >Telegram: @bomzistylyat</p> <p className={styles.Adrees}>АДРЕС:Ул. Пушкина, Д. Колотушкина, стр. 69</p>
          <p className={styles.Instagram} >Instagram: @BZShop</p>     
          <p className={styles.Metro}>
            БЛИЖАЙШЕЕ МЕТРО:
              <li>ЧЕХОВСКАЯ ТВЕРСКАЯ</li>
              <li>ПУШКИНСКАЯ МАЯКОВСКАЯ</li>
          </p>
          <p className={styles.VKontacte}>VK: @BZ</p>

    </main>
    )
}

