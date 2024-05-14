import React from 'react'
import styles from './MainAboutUs.module.css'

export  const AboutUs = () => {
    return(
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
            <div className={styles.Four} >ОДЕВАТЬСЯ, ТАК КАК ОДЕВАЮТСЯ ВСЕ В ЭТИ ДЖОРДАНЫ, ГУЧЧИ И ОСТАЛЬНОЕ ПОДОБИЕ СТИЛЬНЫХ ВЕЩЕЙ, ЧЬЁ ГАРАНТИЯ СТРОИТСЯ НА КИТАЙСКИХ ДЕТИШКАХ, ЗВУЧИТ КРИНЖОВО.</div><div className={styles.Foursec}> Доверьте свои "шмотки" нам и получите качественную ручную работу, за которую не стыдно, и ты точно знаешь, что такая вещь у единиц</div>
            </div>
        </div>

    )
}
