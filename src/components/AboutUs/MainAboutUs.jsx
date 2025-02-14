import React from 'react'
import styles from './MainAboutUs.module.css'

export  const AboutUs = () => {
    return(
    <main>
       <div className={styles.AboutUs}>

            <div className={styles.BackgroundFirst}> 
                <div className={styles.First}> "БОМЖСТАЙЛ" - ЭТО ОДЕВАТЬ РВАНЬЁ И НЕПРИВЫЧНЫЕ "ТРЯПКИ", СОЗДАВАЯ ИЗ ЭТОГО ИСКУССТВО И ОБРАЗЫ</div>
            </div>
            <div className={styles.BackgroundSecond}>
                <div className={styles.Second} >РАРИТЕТ И ОРИГИНАЛЬНОСТЬ - ЭТО ТО, ЧТО ЕСТЬ У ЕДИНИЦ</div>
            </div>
            <div className={styles.BackgroundThird}>
                <div className={styles.Third} >МЫ НЕ НОСИМ ШМОТКИ ДЛЯ ПОНТА, У НАС ТОЛЬКО РЕАЛЬНЫЕ ТРЯПКИ ДЛЯ КАЙФА</div>
            </div>
            <div className={styles.BackgroundFour}>
                <div className={styles.Four} >ОДЕВАТЬСЯ, ТАК КАК ОДЕВАЮТСЯ ВСЕ В ЭТИ ДЖОРДАНЫ, ГУЧЧИ И ОСТАЛЬНОЕ ПОДОБИЕ СТИЛЬНЫХ ВЕЩЕЙ, ЧЬЁ ГАРАНТИЯ СТРОИТСЯ НА КИТАЙСКИХ ДЕТИШКАХ, ЗВУЧИТ КРИНЖОВО.</div>
            </div>
            <div className={styles.BackgroundFive}>
                <div className={styles.Five}> ДОВЕРЬТЕ СВОЮ ОРИГИНАЛЬНОСТЬ НАМ</div>
            </div>

        </div>
    </main>
    )
}
