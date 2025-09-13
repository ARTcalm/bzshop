import React, { useState } from 'react';
import styles from './AddToAuction.module.css';

export const Auction = () => {

    let[WarningMessage, setWarningMessage] = useState(false)

    return (
      <div className={styles.main}>
        <div className={styles.HeadBackground}>
          {WarningMessage && (
          <div className={styles.WarningMessage} onClick={() => setWarningMessage(WarningMessage = !WarningMessage)}> 
                <div className={styles.MessageBackground}>
                  <div className={styles.Message}>Внимания!!! Просим извинения, функция временно недоступна</div>
                  <div className={styles.FakeButton}>X</div>
                </div> 
          </div>)}
          
          <div className={styles.HeadButtonBackground} onClick={() => setWarningMessage(WarningMessage = !WarningMessage)}>          
              <div className={styles.BodyButtonBackground}>
                  <div className={styles.Button}>+</div>
              </div>
          </div>

          <div className={styles.Meeting} onClick={() => setWarningMessage(WarningMessage = !WarningMessage)} >ВЫБЕРИТЕ ТРЯПКУ, КОТОРУЮ ХОТИТЕ ПРОДАТЬ</div>
          
          <div className={styles.PriceBanner}>Цена
            <div className={styles.PriceBlock}>
              <div className={styles.InputPrice}>Впишите желаемые бабки</div>
            </div>
          </div>

          <div className={styles.DescBanner}>Описание шмотки
            <div className={styles.DescBlock}>
              <div className={styles.InputDesc}>Впишите своё представление о вещи:
              <li>из чего сделана</li>
              <li>какой в ней замысел</li>
              <li>какие приёмы при изготовление использовали и тд</li>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}



