import React  from 'react';
import styles from './Modal.module.css';


export const Modal = () => {

    return(
        <div>
           <div className={styles.mainBackground} >
                <div className={styles.modalContent}>
                    <div className={styles.contentImage}>
                        <img src="./img/comp3svg.svg" />
                    </div>
                </div>
            </div>  
        </div>
    )
}